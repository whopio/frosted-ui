import clsx, { ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { fontSize } from './font-sizes';

const twMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: Object.keys(fontSize) }],
  },
});

export function cn(...inputs: ClassValue[]) {
  const modifiedInputs = clsx(inputs);
  return twMerge(modifiedInputs);
}
