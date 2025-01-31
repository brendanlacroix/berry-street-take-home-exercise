import { Dispatch, SetStateAction } from 'react';
import { createContext } from 'use-context-selector';

export type ContextProps = {
  selectedCharacteristics: string[];
  setSelectedCharacteristics: Dispatch<SetStateAction<string[]>>;
};

const Context = createContext<ContextProps>({
  selectedCharacteristics: [],
  setSelectedCharacteristics: () => {},
});

export default Context;
