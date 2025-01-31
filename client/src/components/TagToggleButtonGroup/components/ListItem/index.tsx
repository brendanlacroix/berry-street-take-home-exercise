import { HTMLAttributes } from 'react';

const ListItem = ({ children, ...rest }: HTMLAttributes<HTMLLIElement>) => (
  <li {...rest}>{children}</li>
);

export default ListItem;
