import Container from 'components/container';
import ThemeButton from 'components/theme-button';

function Header() {
  return (
    <header className="element p-4">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="font-bold md:text-2xl">Where in the world?</h1>
          <ThemeButton />
        </div>
      </Container>
    </header>
  );
}

export default Header;
