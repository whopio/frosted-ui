import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 5V10M10 15V10M10 10H5M10 10H15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlusSmallBold20.category = 'Interface General';

export default PlusSmallBold20;
