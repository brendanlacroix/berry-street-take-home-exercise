import { useContextSelector } from 'use-context-selector';

import Context from './context';

const useGroupLabelId = () =>
  useContextSelector(Context, ({ groupLabelId }) => groupLabelId);

export { useGroupLabelId };
