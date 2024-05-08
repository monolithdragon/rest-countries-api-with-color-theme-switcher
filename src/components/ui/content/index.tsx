type ContentType = string | string[] | number;

type Props = {
  title: string;
  data: ContentType;
};

export function Content({ title, data }: Props) {
  return (
    <p className="font-bold">
      {title}: <span className="font-thin">{data}</span>
    </p>
  );
}
