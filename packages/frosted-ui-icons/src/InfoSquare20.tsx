import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoSquare20"
      {...props}
    >
      <path
        d="M13.65 1C16.605 1 19 3.395 19 6.35v7.3c0 2.955-2.395 5.35-5.35 5.35h-7.3C3.395 19 1 16.605 1 13.65v-7.3C1 3.395 3.395 1 6.35 1h7.3zm-7.3 1.5C4.224 2.5 2.5 4.224 2.5 6.35v7.3c0 2.126 1.724 3.85 3.85 3.85h7.3c2.126 0 3.85-1.724 3.85-3.85v-7.3c0-2.126-1.724-3.85-3.85-3.85h-7.3zM10 8.5c.414 0 .75.336.75.75v5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-5c0-.414.336-.75.75-.75zm0-3.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1.001-1c0-.552.449-1 1.001-1z"
        fill={color}
      />
    </svg>
  );
};

InfoSquare20.category = 'Interface General';

export default InfoSquare20;
