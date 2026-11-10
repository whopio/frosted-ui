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
        d="M16.853 6h-6.547C10.137 6 10 5.863 10 5.694V3.021c0-.404-.485-.61-.777-.33L2.291 9.337c-.377.36-.377.963 0 1.325l6.932 6.647c.292.28.777.073.777-.331v-2.673c0-.169.137-.306.306-.306h6.547c.633 0 1.147-.514 1.147-1.147V7.147C18 6.514 17.486 6 16.853 6z"
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
