import * as React from 'react';
import { IconProps } from './types';

export const FilterDown12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FilterDown12"
      {...props}
    >
      <path
        d="M7.219 9c.414 0 .75.336.75.75s-.336.75-.75.75H4.78c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H7.22zM8.75 5.25c.414 0 .75.336.75.75s-.336.75-.75.75h-5.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5.5zm1.5-3.75c.414 0 .75.336.75.75s-.336.75-.75.75h-8.5C1.336 3 1 2.664 1 2.25s.336-.75.75-.75h8.5z"
        fill={color}
      />
    </svg>
  );
};

FilterDown12.category = 'Text Formatting';

export default FilterDown12;
