import * as React from 'react';
import { IconProps } from './types';

export const StarHalf12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StarHalf12"
      {...props}
    >
      <path
        d="M11.57 4.65c-.136-.418-.492-.714-.93-.771l-2.524-.331-1.098-2.281C6.83.871 6.438.625 5.998.625c-.44 0-.828.246-1.018.641L3.882 3.549l-2.525.331c-.437.057-.793.353-.93.771-.134.418-.02.865.3 1.167l1.845 1.738-.463 2.485c-.08.43.09.858.445 1.116.354.26.815.29 1.202.082l2.242-1.208L8.24 11.24c.17.091.354.137.538.137.233 0 .466-.074.664-.219.354-.258.525-.686.445-1.117l-.463-2.484 1.844-1.738c.32-.302.435-.749.3-1.167l.002-.002zM8.249 6.604c-.282.266-.406.652-.334 1.026l.357 1.92-1.736-.936c-.168-.091-.352-.136-.536-.136v-5.87l.85 1.767c.165.347.49.584.873.633l1.947.255-1.421 1.339v.002z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

StarHalf12.category = 'Interface General';

export default StarHalf12;
