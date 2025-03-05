import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeft12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.7122 9.71224L2.28758 2.28761M2.28758 2.28761L8.47477 2.46439M2.28758 2.28761L2.46436 8.4748"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpLeft12;
