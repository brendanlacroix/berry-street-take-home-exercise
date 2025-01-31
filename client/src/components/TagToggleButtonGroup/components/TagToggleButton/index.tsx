import { ComponentProps } from 'react';

import TagToggleButtonComponent from '../../../TagToggleButton';
import classNames from 'classnames';

const TagToggleButton = ({
  children,
  className,
  pressed,
  ...rest
}: ComponentProps<typeof TagToggleButtonComponent>) => (
  <TagToggleButtonComponent {...rest} className={classNames('', className)}>
    {children}
    {pressed ? (
      <>
        <span className="sr-only">Remove filter</span>
        <span aria-hidden className="ml-2 font-bold">
          X
        </span>
      </>
    ) : (
      <span className="sr-only">Add filter</span>
    )}
  </TagToggleButtonComponent>
);

export default TagToggleButton;
