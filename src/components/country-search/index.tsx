import { Search } from 'components/ui/search';
import { FaMagnifyingGlass } from 'react-icons/fa6';

function CountrySearch() {
  return (
    <div className="element inline-flex w-full items-center gap-2 rounded p-4 text-sm focus-within:outline focus-within:outline-1 lg:w-[470px]">
      <FaMagnifyingGlass className="text-base text-[--color-light-input-text] dark:text-inherit" />
      <Search />
    </div>
  );
}

export default CountrySearch;
