import { HTMLAttributes } from 'react';
import { useLabelledById } from '../../context/hooks';

const Title = ({
  children,
  ...rest
}: Omit<HTMLAttributes<HTMLElement>, 'id'>) => (
  // Connects the title to the ProductCard region to provide an accessible label
  <h1 {...rest} id={useLabelledById()}>
    {children}
  </h1>
);

export default Title;
