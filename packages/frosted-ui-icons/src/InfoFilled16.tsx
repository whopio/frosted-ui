import * as React from 'react';
import { IconProps } from './types';

export const InfoFilled16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <circle cx="7.25" cy="3.5" r="1.5" fill={color} />
      <path
        d="M8 13.25V7.75H5.75M8 13.25H5.75M8 13.25H10.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InfoFilled16;
