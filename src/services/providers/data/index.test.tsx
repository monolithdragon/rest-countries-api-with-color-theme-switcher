import { render, fireEvent } from 'vitest-setup';
import DataProvider from '.';
import { useData } from 'hooks/use-data';

describe('DataProvider', () => {
  it('should render children with initial data value as null', () => {
    const { getByTestId } = render(<ChildComponent />, {
      wrapper: DataProvider,
    });

    expect(getByTestId('data-value').textContent).toBe('');
  });

  it('should update data value when changeData is called', () => {
    const { getByTestId } = render(<ChildComponent />, {
      wrapper: DataProvider,
    });

    fireEvent.click(getByTestId('change-data-button'));
    expect(getByTestId('data-value').textContent).toBe('USA');
  });
});

const country = {
  name: {
    common: 'USA',
    nativeName: {},
  },
  capital: [],
  region: 'America',
  subregion: '',
  population: 328200000,
  flags: {
    png: '',
    alt: '',
  },
  currencies: {},
  languages: {},
  borders: [],
  tld: [],
};

const ChildComponent = () => {
  const { data, saveData } = useData();

  return (
    <div>
      <div data-testid="data-value">
        <div>{data?.name.common}</div>
      </div>
      <button
        data-testid="change-data-button"
        onClick={() => saveData(country)}
      >
        Change Data
      </button>
    </div>
  );
};
