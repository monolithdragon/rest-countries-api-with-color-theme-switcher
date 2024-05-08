import CountryList from 'components/country-list';
import CountrySearch from 'components/country-search';
import FilterByRegion from 'components/filter-by-region';
import ContentLayout from 'layouts/content';

const data = ['Africa', 'America', 'Europa'];

function HomePage() {
  return (
    <ContentLayout>
      <section className="flex flex-wrap justify-between gap-y-10">
        <CountrySearch />
        <FilterByRegion regions={data} />
      </section>
      <section className="mt-12">
        <CountryList />
      </section>
    </ContentLayout>
  );
}

export default HomePage;
