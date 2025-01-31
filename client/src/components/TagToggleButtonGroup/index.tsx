import { ComponentProps } from 'react';
import classNames from 'classnames';

import Group from '../Group';
import Label from './components/Label';
import List from './components/List';
import ListItem from './components/ListItem';
import TagToggleButton from './components/TagToggleButton';

const TagToggleButtonGroup = ({
  children,
  className,
  ...rest
}: ComponentProps<typeof Group>) => (
  <Group {...rest} className={classNames('flex flex-col gap-2', className)}>
    {children}
  </Group>
);

export { Label, List, ListItem, TagToggleButton };

export default TagToggleButtonGroup;
