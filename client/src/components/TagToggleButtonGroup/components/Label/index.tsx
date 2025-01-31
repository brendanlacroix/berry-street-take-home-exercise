import { ComponentProps } from 'react';

import { Label as GroupLabel } from '../../../Group';
import classNames from 'classnames';

const Label = ({
  children,
  className,
  ...rest
}: ComponentProps<typeof GroupLabel>) => (
  <GroupLabel {...rest} className={classNames('font-bold text-sm', className)}>
    {children}
  </GroupLabel>
);

export default Label;
