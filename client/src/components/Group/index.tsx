import { HTMLAttributes, useId } from 'react';

import Label from './components/Label';
import ContextProvider from './context/ContextProvider';

const Group = ({
  children,
  ...rest
}: Omit<HTMLAttributes<HTMLDivElement>, 'aria-labelledby' | 'role'>) => {
  const id = useId();

  return (
    <ContextProvider groupLabelId={id}>
      <div {...rest} aria-labelledby={id} role="group">
        {children}
      </div>
    </ContextProvider>
  );
};

export { Label };

export default Group;
