import { renderWithRouter, fireEvent, waitFor } from 'vitest-setup';
import { Card } from '.';
import * as router from 'react-router';

describe('Card component', () => {
  const data = {
    name: { common: 'Country Name' },
    flags: { svg: 'flag.svg', alt: 'Flag Alt Text' },
    population: 1000000,
    region: 'Region Name',
    capital: 'Capital City',
  };

  const navigate = vi.fn();
  vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

  test('renders component correctly', () => {
    const { getByText, getByAltText } = renderWithRouter(<Card data={data} />);

    expect(getByText('Country Name')).toBeInTheDocument();
    expect(getByText('1,000,000')).toBeInTheDocument();
    expect(getByText('Region Name')).toBeInTheDocument();
    expect(getByText('Capital City')).toBeInTheDocument();
    expect(getByAltText('Flag Alt Text')).toBeInTheDocument();
  });

  test('click event navigates to details page', async () => {
    const { getByRole } = renderWithRouter(<Card data={data} />);

    fireEvent.click(getByRole('article'));

    await waitFor(() =>
      expect(navigate).toHaveBeenCalledWith('../details/country name'),
    );
  });
});
