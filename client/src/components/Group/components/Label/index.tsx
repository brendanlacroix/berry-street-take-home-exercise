import { LabelHTMLAttributes } from 'react';

import { useGroupLabelId } from '../../context/hooks';

const Label = ({
  ...rest
}: Omit<LabelHTMLAttributes<HTMLLabelElement>, 'id'>) => (
  <label {...rest} id={useGroupLabelId()} />
);

export default Label;
