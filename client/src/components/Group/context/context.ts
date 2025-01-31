import { createContext } from 'use-context-selector';

export type ContextProps = {
  groupLabelId: string;
};

const Context = createContext<ContextProps>({
  groupLabelId: '',
});

export default Context;
