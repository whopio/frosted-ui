import * as React from 'react';
import { IconProps } from './types';

export const InfoFilled20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
      <circle cx="9.5" cy="5.188" r="1.5" fill={color} />
      <path
        d="M10.5 17.2188V8.75H7.6875M10.5 17.2188H7.6875M10.5 17.2188H13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InfoFilled20;
