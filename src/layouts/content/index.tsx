import Container from 'components/container';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

function ContentLayout({ children }: Props) {
  return (
    <main className="px-4 py-8 lg:py-12">
      <Container>{children}</Container>
    </main>
  );
}

export default ContentLayout;
