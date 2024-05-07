import CountryList from 'components/country-list';
import CountrySearch from 'components/country-search';
import FilterByRegion from 'components/filter-by-region';
import ContentLayout from 'layouts/content';

function HomePage() {
  return (
    <ContentLayout>
      <section>
        <CountrySearch />
        <FilterByRegion />
      </section>
      <section>
        <CountryList />
      </section>
    </ContentLayout>
  );
}

export default HomePage;
