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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14.5 18C15.0523 18 15.5 18.4477 15.5 19C15.5 19.5523 15.0523 20 14.5 20H9.5C8.94772 20 8.5 19.5523 8.5 19C8.5 18.4477 8.94772 18 9.5 18H14.5ZM18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H18ZM21 4C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H3C2.44772 6 2 5.55228 2 5C2 4.44772 2.44772 4 3 4H21Z"
        fill={color}
      />
    </svg>
  );
};

FilterDownBold24.category = 'Text Formatting';

export default FilterDownBold24;
