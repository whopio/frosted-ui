import * as React from 'react';
import { IconProps } from './types';

export const HomeBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2 14.8975C2 13.3696 2.64387 11.9125 3.77354 10.8837L11.7246 3.64331C14.1478 1.43668 17.8522 1.43668 20.2754 3.64331L28.2265 10.8837C29.3561 11.9125 30 13.3696 30 14.8975V25.9286C30 28.1772 28.1772 30 25.9286 30H22.5C21.6716 30 21 29.3284 21 28.5V21C21 18.2386 18.7614 16 16 16C13.2386 16 11 18.2386 11 21V28.5C11 29.3284 10.3284 30 9.5 30H6.07143C3.82284 30 2 28.1772 2 25.9286V14.8975Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

HomeBoldFilled32.category = 'Buildings';

export default HomeBoldFilled32;
