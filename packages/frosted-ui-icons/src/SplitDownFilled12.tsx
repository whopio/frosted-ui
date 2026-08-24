import * as React from 'react';
import { IconProps } from './types';

export const SplitDownFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SplitDownFilled12"
      {...props}
    >
      <path
        d="M.289 8.7c-.441.53-.37 1.318.161 1.76l1.5 1.25c.464.386 1.137.386 1.6 0l1.5-1.25c.53-.442.602-1.23.16-1.76-.226-.271-.542-.422-.867-.446.15-.205.346-.378.578-.503L6 7.169l1.079.582c.232.125.427.298.578.503-.326.024-.642.174-.868.445-.442.53-.37 1.32.16 1.761l1.5 1.25c.464.386 1.137.386 1.6 0l1.5-1.25c.53-.442.602-1.23.16-1.76-.332-.4-.86-.539-1.327-.395-.278-1.163-1.038-2.174-2.117-2.755L7.25 5.003V4.12c.603-.404 1-1.09 1-1.87C8.25 1.007 7.243 0 6 0S3.75 1.007 3.75 2.25c0 .78.397 1.466 1 1.87v.883l-1.015.547c-1.08.581-1.838 1.592-2.116 2.756C1.151 8.16.622 8.3.29 8.7z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

SplitDownFilled12.category = 'Arrows';

export default SplitDownFilled12;
