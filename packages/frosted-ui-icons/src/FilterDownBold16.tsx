import * as React from 'react';
import { IconProps } from './types';

export const FilterDownBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FilterDownBold16"
      {...props}
    >
      <path
        d="M9.25 12c.552 0 1 .448 1 1s-.448 1-1 1h-2.5c-.552 0-1-.448-1-1s.448-1 1-1h2.5zm2.25-5c.552 0 1 .448 1 1s-.448 1-1 1h-7c-.552 0-1-.448-1-1s.448-1 1-1h7zM14 2c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h12z"
        fill={color}
      />
    </svg>
  );
};

FilterDownBold16.category = 'Text Formatting';

export default FilterDownBold16;
