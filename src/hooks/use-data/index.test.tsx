import { DataContext, DataContextType } from 'contexts/data';
import { renderHook } from 'vitest-setup';
import { useData } from '.';

describe('useData', () => {
  it('useData hook throws an error when DataProvider is not available', () => {
    const { result } = renderHook(() => useData());

    expect(result.error).toEqual(
      Error(
        'useData can only be used in the context of a DataProvider component.',
      ),
    );
  });

  it('useData hook returns the correct data context', () => {
    const dataValue: DataContextType = {
      data: [
        {
          name: {
            common: 'Albania',
            nativeName: {},
          },
          capital: [],
          region: 'Europe',
          subregion: '',
          population: 0,
          flags: {
            png: '',
            alt: '',
          },
          currencies: {},
          languages: {},
          borders: [],
          tld: [],
        },
      ],
      saveData: () => {},
    };

    const wrapper = ({ children }: any) => (
      <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
    );

    const { result } = renderHook(() => useData(), { wrapper });

    expect(result.current).toBeDefined();
    expect(result.current).toEqual(dataValue);
  });
});
