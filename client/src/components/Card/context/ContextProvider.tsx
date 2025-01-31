import { type ReactNode } from 'react';

import Context, { ContextProps } from './context';

const ContextProvider = ({
  children,
  labelledById,
}: { children: ReactNode } & ContextProps) => (
  <Context.Provider
    value={{
      labelledById,
    }}
  >
    {children}
  </Context.Provider>
);

export default ContextProvider;
