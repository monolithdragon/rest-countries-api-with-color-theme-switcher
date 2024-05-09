import { useToggle } from 'hooks/use-toggle';
import { FilterButton } from './filter-button';
import { FilterContent } from './filter-content';

type Props = {
  regions: string[];
};

function FilterByRegion({ regions }: Props) {
  const { isOpen, toggleOpen } = useToggle();

  return (
    <div className="element relative w-52 rounded">
      <FilterButton title="Filter by Region" open={toggleOpen} />
      <FilterContent isOpen={isOpen} data={regions} open={toggleOpen} />
    </div>
  );
}

export default FilterByRegion;
