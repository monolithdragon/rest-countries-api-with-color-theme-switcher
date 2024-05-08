import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

function Container({ children }: Props) {
  return <div className="container mx-auto max-w-7xl">{children}</div>;
}

export default Container;
