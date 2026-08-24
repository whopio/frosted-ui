import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracket16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFromBracket16"
      {...props}
    >
      <path
        d="M14.25 8c.414 0 .75.336.75.75v2.037c0 2.347-1.903 4.25-4.25 4.25h-5.5c-2.347 0-4.25-1.903-4.25-4.25V8.75c0-.414.336-.75.75-.75s.75.336.75.75v2.037c0 1.519 1.231 2.75 2.75 2.75h5.5c1.519 0 2.75-1.231 2.75-2.75V8.75c0-.414.336-.75.75-.75zM7.233 1.317c.423-.423 1.11-.423 1.533 0l3.264 3.264c.293.293.293.769 0 1.061-.292.293-.767.293-1.06 0l-2.22-2.22V9.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.422l-2.22 2.22c-.293.293-.767.293-1.06 0-.293-.292-.293-.768 0-1.061l3.263-3.264z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracket16.category = 'Arrows';

export default ArrowUpFromBracket16;
