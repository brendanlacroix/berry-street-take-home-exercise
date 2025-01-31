import { ComponentProps } from 'react';
import Tag from '../Tag';
import ToggleButton from '../ToggleButton';

const TagToggleButton = ({
  children,
  onClick,
  pressed,
  ...rest
}: ComponentProps<typeof Tag> &
  Pick<ComponentProps<typeof ToggleButton>, 'onClick' | 'pressed'>) => (
  <Tag {...rest} asChild>
    <ToggleButton onClick={onClick} pressed={pressed}>
      {children}
    </ToggleButton>
  </Tag>
);

export default TagToggleButton;
