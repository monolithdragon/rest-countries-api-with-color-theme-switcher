import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function classNames(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
