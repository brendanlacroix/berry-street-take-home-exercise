import { useQuery } from '@tanstack/react-query';

const BASE_API_URL = 'http://localhost:3005';

const useFetchData = (selectedCharacteristics: string[]) =>
  useQuery({
    queryKey: ['products', selectedCharacteristics.join(',')],
    queryFn: async (): Promise<
      {
        characteristics: {
          colorClasses: string;
          id: string;
          name: string;
        }[];
        id: number;
        name: string;
        score: number;
      }[]
    > => {
      let query = '';

      if (selectedCharacteristics.length > 0) {
        query = `?characteristics=${selectedCharacteristics.join(
          '&characteristics='
        )}`;
      }

      const products = await fetch(`${BASE_API_URL}/products?${query}`);

      return await products.json();
    },
  });

export default useFetchData;
