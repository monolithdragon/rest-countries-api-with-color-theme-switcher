import { Button } from 'components/ui/button';
import { Link } from 'react-router-dom';

type Props = {
  isOpen: boolean;
  data: string[];
  open(): void;
};

export function FilterContent({ isOpen, data, open }: Props) {
  return (
    <>
      {isOpen && (
        <div className="element absolute left-0 top-14 z-10 w-full space-y-2 rounded-md p-5 outline-none">
          {data.sort().map((regionName) => (
            <Button
              key={regionName}
              as={Link}
              to={`../${regionName.toLowerCase()}`}
              onClick={open}
              className="block hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-gray-500 dark:focus:bg-gray-500"
            >
              {regionName}
            </Button>
          ))}
        </div>
      )}
    </>
  );
}
