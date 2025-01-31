import { createContext } from 'use-context-selector';

export type ContextProps = {
  labelledById: string;
};

const Context = createContext<ContextProps>({
  labelledById: '',
});

export default Context;
