import * as React from 'react';
import { IconProps } from './types';

export const SlidersInASquareFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SlidersInASquareFilled12"
      {...props}
    >
      <path
        d="M8.25 0C10.321 0 12 1.679 12 3.75v4.5C12 10.321 10.321 12 8.25 12h-4.5C1.679 12 0 10.321 0 8.25v-4.5C0 1.679 1.679 0 3.75 0h4.5zm-3.5 5.75c-.414 0-.75.336-.75.75V7h-.25c-.414 0-.75.336-.75.75s.336.75.75.75H4V9c0 .414.336.75.75.75s.75-.336.75-.75v-.5h2.75c.414 0 .75-.336.75-.75S8.664 7 8.25 7H5.5v-.5c0-.414-.336-.75-.75-.75zm2.5-3.5c-.414 0-.75.336-.75.75v.5H3.75c-.414 0-.75.336-.75.75s.336.75.75.75H6.5v.5c0 .414.336.75.75.75S8 5.914 8 5.5V5h.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H8V3c0-.414-.336-.75-.75-.75z"
        fill={color}
      />
    </svg>
  );
};

SlidersInASquareFilled12.category = 'Interface General';

export default SlidersInASquareFilled12;
