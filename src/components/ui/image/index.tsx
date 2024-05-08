import { classNames } from 'utils/class-names';

type Props = {
  image: string;
  alt: string;
  className?: string;
};

export function Image({ image, alt, className }: Props) {
  const classes = classNames('w-full object-cover', className);

  return <img src={image} alt={alt} className={classes} />;
}
