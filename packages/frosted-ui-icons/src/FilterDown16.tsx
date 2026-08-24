import * as React from 'react';
import { IconProps } from './types';

export const FilterDown16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FilterDown16"
      {...props}
    >
      <path
        d="M9.25 12c.414 0 .75.336.75.75s-.336.75-.75.75h-2.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.5zm2.25-4.75c.414 0 .75.336.75.75s-.336.75-.75.75h-7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7zM14 2.5c.414 0 .75.336.75.75S14.414 4 14 4H2c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h12z"
        fill={color}
      />
    </svg>
  );
};

FilterDown16.category = 'Text Formatting';

export default FilterDown16;
