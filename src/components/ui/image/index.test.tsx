import { render } from 'vitest-setup';
import { Image } from '.';

describe('Image component', () => {
  const testData = {
    image: 'image.png',
    alt: 'Test Image',
  };

  it('renders the image with correct src and alt attributes', () => {
    const { getByAltText } = render(
      <Image image={testData.image} alt={testData.alt} />,
    );
    const imageElement = getByAltText(testData.alt);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', testData.image);
    expect(imageElement).toHaveAttribute('alt', testData.alt);
  });
});
