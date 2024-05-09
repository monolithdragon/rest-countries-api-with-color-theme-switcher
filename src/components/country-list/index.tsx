import { Card } from 'components/ui/card';
import { useData } from 'hooks/use-data';

function CountryList() {
  const { data } = useData();

  return (
    <div className="flex flex-wrap place-content-center gap-8 sm:gap-[72px]">
      {data && Array.isArray(data)
        ? data.map((country: any) => (
            <Card key={country.name.common} data={country} />
          ))
        : data && <Card data={data} />}
    </div>
  );
}

export default CountryList;
