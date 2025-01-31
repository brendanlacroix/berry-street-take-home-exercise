import { type ReactNode } from 'react';

import Context, { ContextProps } from './context';

const ContextProvider = ({
  children,
  groupLabelId,
}: { children: ReactNode } & ContextProps) => (
  <Context.Provider
    value={{
      groupLabelId,
    }}
  >
    {children}
  </Context.Provider>
);

export default ContextProvider;
