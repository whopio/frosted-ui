import * as React from 'react';
import { IconProps } from './types';

export const FilterDown32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FilterDown32"
      {...props}
    >
      <path
        d="M19.25 24.25c.414 0 .75.336.75.75s-.336.75-.75.75h-6.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.5zm4-9c.414 0 .75.336.75.75s-.336.75-.75.75H8.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h14.5zm4-9c.414 0 .75.336.75.75s-.336.75-.75.75H4.75C4.336 7.75 4 7.414 4 7s.336-.75.75-.75h22.5z"
        fill={color}
      />
    </svg>
  );
};

FilterDown32.category = 'Text Formatting';

export default FilterDown32;
