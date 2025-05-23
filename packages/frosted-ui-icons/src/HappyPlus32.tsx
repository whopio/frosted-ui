import * as React from 'react';
import { IconProps } from './types';

export const HappyPlus32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M25 10.3333V6.33333M25 6.33333V2.33333M25 6.33333H21M25 6.33333H29M28.9466 10.0379C29.7833 11.8517 30.25 13.8714 30.25 16 30.25 23.8701 23.8701 30.25 16 30.25 8.12994 30.25 1.75 23.8701 1.75 16 1.75 8.12994 8.12994 1.75 16 1.75 17.7212 1.75 19.3712 2.05517 20.8987 2.61435"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="17.5" r="1.5" fill={color} />
      <circle cx="22.499" cy="17.5" r="1.5" fill={color} />
      <path
        d="M20.25 21.75C20.25 21.75 19 24.25 16 24.25C13 24.25 11.75 21.75 11.75 21.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HappyPlus32;
