import { render, fireEvent, renderWithRouter } from 'vitest-setup';
import FilterByRegion from '.';

describe('FilterByRegion', () => {
  const regions = ['Region A', 'Region B', 'Region C'];
  it('renders FilterByRegion component correctly', () => {
    const { getByText } = render(<FilterByRegion regions={regions} />);

    expect(getByText('Filter by Region')).toBeInTheDocument();
  });

  it('toggles FilterContent when FilterButton is clicked', () => {
    const { getByText } = renderWithRouter(
      <FilterByRegion regions={regions} />,
    );

    const filterButton = getByText('Filter by Region');
    fireEvent.click(filterButton);

    expect(getByText('Region A')).toBeInTheDocument();
    expect(getByText('Region B')).toBeInTheDocument();
    expect(getByText('Region C')).toBeInTheDocument();
  });
});
