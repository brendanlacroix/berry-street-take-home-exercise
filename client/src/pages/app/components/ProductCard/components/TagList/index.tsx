import { HTMLAttributes } from 'react';

const TagList = ({
  children,
  ...rest
}: Omit<HTMLAttributes<HTMLUListElement>, 'role'>) => (
  // aria-label to clarify for screenreaders upon entry into the list
  <ul {...rest} aria-label="Tags" className="flex flex-wrap gap-2">
    {children}
  </ul>
);

export default TagList;
