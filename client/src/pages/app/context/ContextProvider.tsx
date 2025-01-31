import { type ReactNode } from 'react';

import Context, { ContextProps } from './context';

const ContextProvider = ({
  children,
  selectedCharacteristics,
  setSelectedCharacteristics,
}: { children: ReactNode } & ContextProps) => (
  <Context.Provider
    value={{
      selectedCharacteristics,
      setSelectedCharacteristics,
    }}
  >
    {children}
  </Context.Provider>
);

export default ContextProvider;
