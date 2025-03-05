import * as React from 'react';
import { IconProps } from './types';

export const InfoFilled12 = ({
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
      <circle cx="5.34" cy="3.004" r="1.027" fill={color} />
      <path
        d="M6 9.46875V5.59375H4.3125M6 9.46875H4.3125M6 9.46875H7.6875"
        stroke={color}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InfoFilled12;
