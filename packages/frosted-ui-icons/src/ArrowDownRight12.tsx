import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRight12 = ({
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
        d="M2.28767 2.28776L9.7123 9.71239M9.7123 9.71239L3.52511 9.53561M9.7123 9.71239L9.53552 3.5252"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownRight12;
