import React from 'react';
import { classNames } from 'utils/class-names';

type Props<TElement extends React.ElementType> = {
  as?: TElement;
} & React.ComponentPropsWithoutRef<TElement>;

export function Button<TElement extends React.ElementType>({
  as,
  ...props
}: Props<TElement>) {
  const Component = as || 'button';

  const classes = classNames(
    'inline-flex items-center outline-none transition-all',
    props.className,
  );

  return <Component {...props} className={classes} />;
}
