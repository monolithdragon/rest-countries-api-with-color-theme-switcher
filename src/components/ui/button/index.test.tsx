import { fireEvent, render } from 'vitest-setup';
import { Button } from '.';

describe('Button', () => {
  it('renders a button element by default', () => {
    const { container } = render(<Button>Hello</Button>);

    const buttonElement = container.querySelector('button');

    expect(buttonElement).toBeInTheDocument();
  });

  it('renders a custom element when "as" prop is provided', () => {
    const { container } = render(<Button as="a">Hello</Button>);

    const customElement = container.querySelector('a');

    expect(customElement).toBeInTheDocument();
  });

  it('passes additional props to the rendered component', () => {
    const onClick = vi.fn();
    const { container } = render(<Button onClick={onClick}>Click me</Button>);

    const buttonElement = container.querySelector('button');

    fireEvent.click(buttonElement!);
    expect(onClick).toHaveBeenCalled();
  });
});
