import * as React from 'react';
import { IconProps } from './types';

export const FilterDownBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FilterDownBold32"
      {...props}
    >
      <path
        d="M19.25 24c.552 0 1 .448 1 1s-.448 1-1 1h-6.5c-.552 0-1-.448-1-1s.448-1 1-1h6.5zm4-9c.552 0 1 .448 1 1s-.448 1-1 1H8.75c-.552 0-1-.448-1-1s.448-1 1-1h14.5zm4-9c.552 0 1 .448 1 1s-.448 1-1 1H4.75c-.552 0-1-.448-1-1s.448-1 1-1h22.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

FilterDownBold32.category = 'Text Formatting';

export default FilterDownBold32;
