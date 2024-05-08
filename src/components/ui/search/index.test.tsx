import { render, fireEvent } from 'vitest-setup';
import { Search } from '.';

describe('Search component', () => {
  it('should update input value on change', () => {
    const { getByRole } = render(<Search />);
    const inputElement = getByRole('searchbox');

    fireEvent.change(inputElement, { target: { value: 'USA' } });

    expect(inputElement.getAttribute('value')).toBe('USA');
  });

  it('should clear input value on Enter key press', () => {
    const { getByPlaceholderText } = render(<Search />);
    const inputElement = getByPlaceholderText('Search for a country...');

    fireEvent.change(inputElement, { target: { value: 'USA' } });
    fireEvent.keyUp(inputElement, { key: 'Enter', code: 'Enter' });

    expect(inputElement.getAttribute('value')).toBe('');
  });
});
