import Container from 'components/container';
import ThemeButton from 'components/theme-button';

function Header() {
  return (
    <header className="p-4">
      <Container>
        <h1>Where is in the world?</h1>
        <ThemeButton />
      </Container>
    </header>
  );
}

export default Header;
