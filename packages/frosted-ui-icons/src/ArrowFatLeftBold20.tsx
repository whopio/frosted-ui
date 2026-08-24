import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatLeftBold20"
      {...props}
    >
      <path
        d="M10.306 6h6.547C17.486 6 18 6.514 18 7.147v5.706c0 .633-.514 1.147-1.147 1.147h-6.547c-.169 0-.306.137-.306.306v2.673c0 .404-.485.61-.777.33l-6.932-6.647c-.377-.36-.377-.963 0-1.324L9.223 2.69c.292-.28.777-.073.777.331v2.673c0 .169.137.306.306.306z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeftBold20.category = 'Arrows';

export default ArrowFatLeftBold20;
