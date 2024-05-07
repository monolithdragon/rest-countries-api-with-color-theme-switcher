import Container from 'components/container';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

function ContentLayout({ children }: Props) {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
}

export default ContentLayout;
