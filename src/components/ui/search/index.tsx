import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Search() {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setValue(event.currentTarget.value);
  }

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.code === 'Enter') {
      setValue('');

      navigate(`../${event.currentTarget.value.toLowerCase()}`);
    }
  }

  return (
    <input
      type="search"
      name="country-search"
      id="country-search"
      value={value}
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      placeholder="Search for a country..."
      className="w-full bg-transparent px-2 outline-none placeholder:text-[--color-light-input-text] dark:placeholder:text-white"
    />
  );
}
