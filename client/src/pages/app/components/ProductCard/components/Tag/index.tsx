import { ComponentProps } from 'react';
import TagComponent from '../../../../../../components/Tag';

const Tag = ({
  children,
  ...rest
}: Omit<ComponentProps<typeof TagComponent>, 'role'>) => (
  <li>
    <TagComponent {...rest}>{children}</TagComponent>
  </li>
);

export default Tag;
