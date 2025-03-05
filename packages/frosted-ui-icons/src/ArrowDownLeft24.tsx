import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.8336 6.16649L6.16634 17.8337M6.16634 17.8337L6.34312 8.81814M6.16634 17.8337L15.182 17.657"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownLeft24;
