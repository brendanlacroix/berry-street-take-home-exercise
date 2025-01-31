import axios from 'axios';
import { useEffect, useState } from 'react';

const BASE_API_URL = 'http://localhost:3005';

const useFetchData = () => {
  const [products, setProducts] = useState<
    {
      id: string;
      name: string;
      characteristics: string[];
    }[]
  >([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/products`);
        setProducts(response.data);
        console.log('Products loaded:', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return products;
};

export default useFetchData;
