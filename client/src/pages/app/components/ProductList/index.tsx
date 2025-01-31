import { HTMLAttributes } from 'react';

const ProductList = ({ children, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div {...rest} className="grid md:grid-cols-3 gap-3 auto-rows-fr">
    {children}
  </div>
);

export default ProductList;
