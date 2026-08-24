import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracket32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFromBracket32"
      {...props}
    >
      <path
        d="M30.25 16c.414 0 .75.336.75.75v5.5c0 4.832-3.918 8.75-8.75 8.75H9.75C4.918 31 1 27.082 1 22.25v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 4.004 3.246 7.25 7.25 7.25h12.5c4.004 0 7.25-3.246 7.25-7.25v-5.5c0-.414.336-.75.75-.75zM14.998 1.44c.519-.518 1.34-.551 1.897-.097l.107.097 8.03 8.029c.292.292.292.768 0 1.061-.294.293-.77.293-1.062 0l-7.22-7.22V19.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.31l-7.22 7.22c-.292.293-.767.292-1.06 0-.293-.293-.293-.769 0-1.061l8.028-8.029z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracket32.category = 'Arrows';

export default ArrowUpFromBracket32;
