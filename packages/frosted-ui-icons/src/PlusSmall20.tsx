import * as React from 'react';
import { IconProps } from './types';

export const PlusSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 4.75V10M10 15.25V10M10 10H4.75M10 10H15.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlusSmall20.category = 'Interface General';

export default PlusSmall20;
