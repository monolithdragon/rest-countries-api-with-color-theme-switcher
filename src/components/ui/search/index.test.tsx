import { fireEvent, renderWithRouter, waitFor } from 'vitest-setup';
import { Search } from '.';
import * as router from 'react-router';

describe('Search component', () => {
  const navigate = vi.fn();
  vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

  it('should update input value on change', () => {
    const { getByRole } = renderWithRouter(<Search />);
    const inputElement = getByRole('searchbox');

    fireEvent.change(inputElement, { target: { value: 'USA' } });

    expect(inputElement.getAttribute('value')).toBe('USA');
  });

  it('should clear input value on Enter key press', async () => {
    const { getByPlaceholderText } = renderWithRouter(<Search />);
    const inputElement = getByPlaceholderText('Search for a country...');

    fireEvent.change(inputElement, { target: { value: 'Hungary' } });
    fireEvent.keyUp(inputElement, { key: 'Enter', code: 'Enter' });

    expect(inputElement.getAttribute('value')).toBe('');
    await waitFor(() => expect(navigate).toHaveBeenCalledWith('../hungary'));
  });
});
