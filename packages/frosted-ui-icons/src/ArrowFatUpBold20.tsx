import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUpBold20"
      {...props}
    >
      <path
        d="M6 16.853v-6.547c0-.169-.137-.306-.306-.306H3.02c-.404 0-.61-.485-.331-.777l6.647-6.932c.362-.377.964-.377 1.325 0l6.648 6.932c.28.292.073.777-.332.777h-2.672c-.17 0-.306.137-.306.306v6.547c0 .633-.514 1.147-1.148 1.147H7.147C6.513 18 6 17.486 6 16.853z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUpBold20.category = 'Arrows';

export default ArrowFatUpBold20;
