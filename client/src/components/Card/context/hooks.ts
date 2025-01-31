import { useContextSelector } from 'use-context-selector';

import Context from './context';

const useLabelledById = () =>
  useContextSelector(Context, ({ labelledById }) => labelledById);

export { useLabelledById };
