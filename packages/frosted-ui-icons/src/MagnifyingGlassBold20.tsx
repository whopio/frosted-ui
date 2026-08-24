import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MagnifyingGlassBold20"
      {...props}
    >
      <path
        d="M8.503 1c4.142 0 7.5 3.358 7.5 7.5 0 1.71-.575 3.287-1.54 4.549l4.243 4.242c.39.39.39 1.024 0 1.414-.39.39-1.023.39-1.414 0l-4.242-4.242C11.788 15.426 10.213 16 8.503 16c-4.142 0-7.5-3.358-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5zm0 2c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5c3.037 0 5.5-2.463 5.5-5.5S11.54 3 8.503 3z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MagnifyingGlassBold20.category = 'Interface General';

export default MagnifyingGlassBold20;
