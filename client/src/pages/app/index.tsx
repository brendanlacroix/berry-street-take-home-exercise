import { useId, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ProductList from './components/ProductList';
import CharacteristicsFilters from './components/CharacteristicsFilters';
import useFetchData from './hooks/useFetchData';
import ContextProvider from './context/ContextProvider';

const App = () => {
  const [selectedCharacteristics, setSelectedCharacteristics] = useState<
    string[]
  >([]);
  const { data, error, isError, isLoading } = useFetchData(
    selectedCharacteristics
  );
  const mainContentId = useId();

  return (
    <ContextProvider
      selectedCharacteristics={selectedCharacteristics}
      setSelectedCharacteristics={setSelectedCharacteristics}
    >
      <a href={`#${mainContentId}`} className="sr-only sr-only-focusable">
        Skip to main content
      </a>
      <div className="m-5">
        <header className="mb-6 text-2xl font-bold">
          <h1>Product Compass</h1>
        </header>
        <main id={mainContentId}>
          <CharacteristicsFilters />
          <ProductList
            data={data}
            error={error}
            isError={isError}
            isLoading={isLoading}
          />
        </main>
      </div>
    </ContextProvider>
  );
};

const queryClient = new QueryClient();

const QueryableApp = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

export default QueryableApp;
