import * as React from 'react';
import { IconProps } from './types';

export const BanFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.7383 2.32129C11.5283 3.33738 12 4.61326 12 6C12 9.31371 9.31371 12 6 12C4.61326 12 3.33738 11.5283 2.32129 10.7383L10.7383 2.32129ZM6 0C7.38625 0 8.66182 0.47124 9.67773 1.26074L1.26074 9.67773C0.47124 8.66182 0 7.38625 0 6C0 2.68629 2.68629 0 6 0Z"
        fill={color}
      />
    </svg>
  );
};

export default BanFilled12;
