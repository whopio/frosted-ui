import * as React from 'react';
import { IconProps } from './types';

export const PencilBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PencilBoldFilled32"
      {...props}
    >
      <path
        d="M24.375 16.79L12.457 28.706c-.154.154-.354.253-.57.283l-9 1.25c-.31.043-.623-.061-.844-.283-.222-.222-.327-.534-.283-.845l1.25-9 .035-.158c.048-.154.132-.296.248-.411L15.21 7.624l9.165 9.165zm-.813-15.04c1.586 0 3.107.63 4.228 1.751l.709.708c1.121 1.121 1.75 2.643 1.75 4.229 0 1.585-.63 3.106-1.75 4.227l-2.71 2.71-9.165-9.165 2.71-2.709c1.121-1.121 2.643-1.751 4.228-1.751z"
        fill={color}
      />
    </svg>
  );
};

PencilBoldFilled32.category = 'Objects';

export default PencilBoldFilled32;
