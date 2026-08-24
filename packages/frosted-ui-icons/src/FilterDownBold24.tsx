import * as React from 'react';
import { IconProps } from './types';

export const FilterDownBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FilterDownBold24"
      {...props}
    >
      <path
        d="M14.5 18c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h5zm3.5-7c.552 0 1 .448 1 1s-.448 1-1 1H6c-.552 0-1-.448-1-1s.448-1 1-1h12zm3-7c.552 0 1 .448 1 1s-.448 1-1 1H3c-.552 0-1-.448-1-1s.448-1 1-1h18z"
        fill={color}
      />
    </svg>
  );
};

FilterDownBold24.category = 'Text Formatting';

export default FilterDownBold24;
