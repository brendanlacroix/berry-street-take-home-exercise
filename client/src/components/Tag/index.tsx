import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import { HTMLAttributes } from 'react';

const Tag = ({
  asChild,
  children,
  className,
  ...rest
}: Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> & {
  asChild?: boolean;
}) => {
  const Component = asChild ? Slot : 'div';

  return (
    <Component
      {...rest}
      className={classNames(
        'flex items-center text-xs font-medium px-2.5 py-0.5 rounded-md border',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Tag;
