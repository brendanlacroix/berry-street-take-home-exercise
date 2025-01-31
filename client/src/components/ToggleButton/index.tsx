import { ComponentProps, Dispatch, SetStateAction } from 'react';

import Button from '../Button';

const ToggleButton = ({
  children,
  onClick,
  pressed,
  ...rest
}: Omit<ComponentProps<typeof Button>, 'aria-pressed' | 'onClick'> & {
  onClick?: Dispatch<SetStateAction<boolean>>;
  pressed?: boolean;
}) => (
  <Button
    {...rest}
    aria-pressed={pressed}
    onClick={() => onClick?.((pressed) => !pressed)}
  >
    {children}
  </Button>
);

export default ToggleButton;
