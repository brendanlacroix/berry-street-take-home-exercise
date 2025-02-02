import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

const Button = ({
  asChild,
  children,
  className,
  ...rest
}: Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'role' | 'type'
> & {
  asChild?: boolean;
  onClick?: () => void;
}) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      {...rest}
      className={classNames('outline-blue-500', className)}
      type="button"
    >
      {children}
    </Component>
  );
};

export default Button;
