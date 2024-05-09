import CountryList from 'components/country-list';
import CountrySearch from 'components/country-search';
import FilterByRegion from 'components/filter-by-region';
import { useData } from 'hooks/use-data';
import ContentLayout from 'layouts/content';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function HomePage() {
  const [regionName, setRegionName] = useState<Set<string>>(
    () => new Set<string>(),
  );
  const rawData = useLoaderData();
  const { saveData } = useData();

  useEffect(() => {
    if (rawData) {
      saveData(rawData);
    }
  }, [rawData]);

  useEffect(() => {
    if (Array.isArray(rawData)) {
      rawData.map((item: any) =>
        setRegionName((prev) => new Set(prev).add(item.region)),
      );
    }
  }, []);

  return (
    <ContentLayout>
      <section className="flex flex-wrap justify-between gap-y-10">
        <CountrySearch />
        <FilterByRegion regions={[...regionName]} />
      </section>
      <section className="mt-12">
        <CountryList />
      </section>
    </ContentLayout>
  );
}

export default HomePage;
