import * as React from 'react';
import { IconProps } from './types';

export const FilterDownBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FilterDownBold20"
      {...props}
    >
      <path
        d="M12 14.75c.552 0 1 .448 1 1s-.448 1-1 1H8c-.552 0-1-.448-1-1s.448-1 1-1h4zM14.75 9c.552 0 1 .448 1 1s-.448 1-1 1h-9.5c-.552 0-1-.448-1-1s.448-1 1-1h9.5zm2.75-5.75c.552 0 1 .448 1 1s-.448 1-1 1h-15c-.552 0-1-.448-1-1s.448-1 1-1h15z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

FilterDownBold20.category = 'Text Formatting';

export default FilterDownBold20;
