import classNames from 'classnames';
import { HTMLAttributes } from 'react';

const List = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLUListElement>) => (
  <ul {...rest} className={classNames('flex flex-wrap gap-2', className)}>
    {children}
  </ul>
);

export default List;
