import express from 'express';
import axios from 'axios';

const router = express.Router();
const jsonServerUrl = 'http://localhost:4000';

const cache = {};
const queryCache = {};

// Chose to use a cache to avoid refetching over and over,
// and I'm also merging together the products and their characteristics (which are now their own model).
// Because of that, score's always available… so I'm returning it as well.
// In a more complex scenario, I'd have a better database to work with
// (or, because this dataset is _barely_ relational, I'd use a graph solution
// and query for the first X products)
const getCompleteProducts = async (req, res) => {
  const { characteristics } = req.query;

  const normalizedCharacteristics = Array.isArray(characteristics)
    ? characteristics
    : [characteristics];

  try {
    const response = await axios.get(`${jsonServerUrl}/products`);

    const completeProductPromises = response.data.map(
      async ({ id, ...rest }) => {
        if (cache[id]) return cache[id];

        const response = await axios.get(
          `${jsonServerUrl}/productsCharacteristics?productId=${id}&_embed=characteristic`
        );

        const characteristics = response.data.map(
          ({ characteristic }) => characteristic
        );

        const score = characteristics.reduce(
          (acc, { score }) => acc + score,
          0
        );

        const product = {
          ...rest,
          id,
          characteristics,
          score,
        };

        cache[id] = product;

        return product;
      }
    );

    const completeProducts = await Promise.all(completeProductPromises);

    if (normalizedCharacteristics.length) {
      // Separate cache for the characteristics queries as well to avoid using the filter function
      const cachedQuery = queryCache[normalizedCharacteristics.join(',')];

      if (cachedQuery) return res.json(cachedQuery);

      const filteredProducts = completeProducts.filter(
        ({ characteristics: productCharacteristics }) =>
          productCharacteristics.some(({ id }) =>
            normalizedCharacteristics.includes(id)
          )
      );

      if (!filteredProducts.length) return res.json(filteredProducts);

      queryCache[normalizedCharacteristics.join(',')] = filteredProducts;

      return res.json(filteredProducts);
    }

    res.json(completeProducts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Error fetching posts');
  }
};

router.get('/', getCompleteProducts);

// And because I'm preemptively calculating the scores and caching them,
// I'm just using the same handler for the scores endpoint
router.get('/scores', getCompleteProducts);

export default router;
