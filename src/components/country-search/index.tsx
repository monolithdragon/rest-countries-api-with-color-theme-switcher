import { Search } from 'components/ui/search';
import { FaMagnifyingGlass } from 'react-icons/fa6';

type Props = {};

function CountrySearch({}: Props) {
  return (
    <div className="element inline-flex w-full items-center gap-2 rounded px-4 py-4 text-sm lg:w-2/5">
      <FaMagnifyingGlass />
      <Search />
    </div>
  );
}

export default CountrySearch;
