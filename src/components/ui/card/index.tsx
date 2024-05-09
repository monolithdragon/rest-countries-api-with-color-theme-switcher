import { Image } from 'components/ui/image';
import { Content } from 'components/ui/content';
import { useNavigate } from 'react-router-dom';

type Props = {
  data: any;
};

export function Card({ data }: Props) {
  const navigate = useNavigate();

  return (
    <article
      className="element h-[345px] w-[265px] cursor-pointer rounded transition-all hover:scale-105"
      onClick={() => navigate(`../details/${data.name.common.toLowerCase()}`)}
    >
      <Image
        image={data.flags.svg}
        alt={data.flags.alt}
        className="h-[160px] rounded-se rounded-ss"
      />
      <div className="space-y-5 px-6 py-7">
        <h3 className="truncate text-xl font-bold">{data.name.common}</h3>
        <div className="space-y-1 text-sm">
          <Content
            title="Population"
            data={data.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          />
          <Content title="Region" data={data.region} />
          <Content title="Capital" data={data.capital} />
        </div>
      </div>
    </article>
  );
}
