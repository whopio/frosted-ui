import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmallFilled32"
      {...props}
    >
      <path
        d="M21.701 15.114c.49-.487 1.28-.485 1.768.004.486.49.485 1.28-.004 1.768l-6.113 6.086c-.747.744-1.957.744-2.705 0l-6.112-6.086c-.49-.487-.49-1.278-.004-1.768.487-.489 1.278-.49 1.768-.004l5.7 5.676 5.702-5.676zm0-6.256c.49-.486 1.28-.485 1.768.004.487.49.485 1.28-.004 1.768l-6.113 6.086c-.747.744-1.957.744-2.705 0L8.535 10.63c-.49-.487-.49-1.278-.004-1.768.487-.489 1.279-.49 1.768-.004l5.7 5.676 5.702-5.676z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallFilled32.category = 'Arrows';

export default DoubleChevronDownSmallFilled32;
