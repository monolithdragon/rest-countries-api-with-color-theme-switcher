import { createContext } from 'react';

export type DataContextType = {
  data: any;
  saveData: (data: any) => void;
};

export const DataContext = createContext<DataContextType>(undefined as any);
