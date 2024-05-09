import { DataContext, DataContextType } from 'contexts/data';
import { useContext } from 'react';

export function useData(): DataContextType {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error(
      'useData can only be used in the context of a DataProvider component.',
    );
  }

  return context;
}
