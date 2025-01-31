import { useContextSelector } from 'use-context-selector';

import Context from './context';

const useSelectedCharacteristics = () =>
  useContextSelector(
    Context,
    ({ selectedCharacteristics }) => selectedCharacteristics
  );

const useSetSelectedCharacteristics = () =>
  useContextSelector(
    Context,
    ({ setSelectedCharacteristics }) => setSelectedCharacteristics
  );

export { useSelectedCharacteristics, useSetSelectedCharacteristics };
