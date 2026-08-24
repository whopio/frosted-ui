import * as React from 'react';
import { IconProps } from './types';

export const RotateBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateBoldFilled32"
      {...props}
    >
      <path
        d="M30 19c.828 0 1.5.672 1.5 1.5v7c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-2.339C25.68 29.003 21.134 31.5 16 31.5c-6.718 0-12.434-4.274-14.586-10.246-.28-.78.123-1.638.902-1.919.78-.28 1.64.123 1.92.902C5.973 25.057 10.586 28.5 16 28.5c4.727 0 8.844-2.625 10.969-6.5H23c-.828 0-1.5-.672-1.5-1.5S22.172 19 23 19h7zM16 .5c6.718 0 12.435 4.274 14.587 10.246.28.78-.124 1.638-.903 1.919-.78.28-1.639-.123-1.92-.902C26.029 6.943 21.415 3.5 16 3.5c-4.727 0-8.843 2.625-10.968 6.5H9c.828 0 1.5.672 1.5 1.5S9.828 13 9 13H2c-.828 0-1.5-.672-1.5-1.5v-7C.5 3.672 1.172 3 2 3s1.5.672 1.5 1.5v2.339C6.32 2.997 10.867.5 16 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateBoldFilled32.category = 'Arrows';

export default RotateBoldFilled32;
