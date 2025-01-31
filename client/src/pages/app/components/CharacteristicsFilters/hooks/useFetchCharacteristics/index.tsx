import { useQuery } from '@tanstack/react-query';

const BASE_API_URL = 'http://localhost:3005';

const useFetchCharacteristics = () =>
  useQuery({
    queryKey: ['characteristics'],
    queryFn: async (): Promise<
      {
        colorClasses: string;
        id: string;
        name: string;
      }[]
    > => await (await fetch(`${BASE_API_URL}/characteristics`)).json(),
  });

export default useFetchCharacteristics;
