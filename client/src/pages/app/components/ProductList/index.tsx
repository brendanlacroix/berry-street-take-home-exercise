import { HTMLAttributes } from 'react';

import ProductCard, { Tag, TagList, Title } from '../../components/ProductCard';
import type useFetchData from '../../hooks/useFetchData';

const ProductList = ({
  children,
  data,
  error,
  isError,
  isLoading,
  ...rest
}: HTMLAttributes<HTMLDivElement> & {
  data: ReturnType<typeof useFetchData>['data'];
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
}) => {
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  if (!data?.length)
    return (
      <div>
        No results found. Try adding some characteristics in the filter bar!
      </div>
    );

  return (
    <div {...rest} className="grid md:grid-cols-3 gap-3 auto-rows-fr">
      {data?.map(({ characteristics, id, name, score }) => (
        <ProductCard key={id}>
          <div className="flex items-center justify-between">
            <Title>{name}</Title>
            <p className="text-xs">Score: {score}</p>
          </div>
          <TagList>
            {characteristics.map(({ colorClasses, id, name }) => (
              <Tag key={id} className={colorClasses}>
                {name}
              </Tag>
            ))}
          </TagList>
        </ProductCard>
      ))}
    </div>
  );
};

export default ProductList;
