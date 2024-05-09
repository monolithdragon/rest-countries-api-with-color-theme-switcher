import { DataContext } from 'contexts/data';
import { PropsWithChildren, useCallback, useState } from 'react';

type Props = PropsWithChildren;

function DataProvider({ children }: Props) {
  const [data, setData] = useState<any>(null);

  const handleDataChanged = useCallback(
    (data: any) => {
      setData(data);
    },
    [data],
  );

  return (
    <DataContext.Provider value={{ data, saveData: handleDataChanged }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
