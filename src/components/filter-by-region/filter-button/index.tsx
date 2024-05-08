import { Button } from 'components/ui/button';
import { FaChevronDown } from 'react-icons/fa6';

type Props = {
  title: string;
  open(): void;
};

export function FilterButton({ title, open }: Props) {
  return (
    <Button
      type="button"
      onClick={open}
      onFocus={open}
      className="w-full justify-between p-4"
    >
      <span className="text-sm">{title}</span>
      <FaChevronDown className="pointer-events-none w-2.5" />
    </Button>
  );
}
