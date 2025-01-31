import classNames from 'classnames';
import { HTMLAttributes, useId } from 'react';

import Title from './components/Title';
import ContextProvider from './context/ContextProvider';

const Card = ({
  children,
  className,
  ...rest
}: Omit<HTMLAttributes<HTMLDivElement>, 'aria-labelledby'>) => {
  const id = useId();

  return (
    <ContextProvider labelledById={id}>
      <section
        {...rest}
        // aria-labelledby to associate the card with its title
        aria-labelledby={id}
        className={classNames(
          'relative rounded-lg bg-white py-4 px-5 border border-gray-200 shadow-sm flex flex-col gap-4',
          className
        )}
      >
        {children}
      </section>
    </ContextProvider>
  );
};

export { Title };

export default Card;
