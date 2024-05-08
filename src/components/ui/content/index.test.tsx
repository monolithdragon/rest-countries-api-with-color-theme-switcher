import { render } from 'vitest-setup';
import { Content } from '.';

describe('Content component', () => {
  it('renders the title and data correctly', () => {
    const data = 'Example Data';
    const title = 'Example Title';

    const { getByText } = render(<Content data={data} title={title} />);

    expect(getByText(`${title}:`)).toBeInTheDocument();
    expect(getByText(`${title}:`)).toHaveTextContent(data);
  });
});
