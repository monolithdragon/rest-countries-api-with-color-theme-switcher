import Container from 'components/container';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

function ContentLayout({ children }: Props) {
  return (
    <main className="p-4">
      <Container>{children}</Container>
    </main>
  );
}

export default ContentLayout;
