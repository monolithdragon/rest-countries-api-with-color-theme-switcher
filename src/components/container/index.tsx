import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

function Container({ children }: Props) {
  return <div>{children}</div>;
}

export default Container;
