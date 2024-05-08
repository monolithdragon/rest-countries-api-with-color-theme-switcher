import { useCallback, useState } from 'react';

export function useToggle(defaultValue?: boolean) {
  const [isOpen, setIsOpen] = useState(defaultValue || false);

  const toggleOpen = useCallback(() => {
    setIsOpen((x) => !x);
  }, []);

  return { isOpen, toggleOpen };
}
