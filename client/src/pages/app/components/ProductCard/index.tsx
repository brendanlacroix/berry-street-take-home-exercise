import { ComponentProps } from 'react';

import Card, { Title } from '../../../../components/Card';
import Tag from './components/Tag';
import TagList from './components/TagList';

const ProductCard = ({
  children,
  className,
  ...rest
}: ComponentProps<typeof Card>) => <Card {...rest}>{children}</Card>;

export { Tag, TagList, Title };

export default ProductCard;
