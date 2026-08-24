import * as React from 'react';
import { IconProps } from './types';

export const SlidersInASquareFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SlidersInASquareFilled20"
      {...props}
    >
      <path
        d="M14.65 0C17.605 0 20 2.395 20 5.35v9.3c0 2.955-2.395 5.35-5.35 5.35h-9.3C2.395 20 0 17.605 0 14.65v-9.3C0 2.395 2.395 0 5.35 0h9.3zm-6.4 10.25C7.007 10.25 6 11.257 6 12.5v.25H4.75c-.414 0-.75.336-.75.75s.336.75.75.75H6v.25c0 1.243 1.007 2.25 2.25 2.25s2.25-1.007 2.25-2.25v-.25h4.75c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H10.5v-.25c0-1.243-1.007-2.25-2.25-2.25zm0 1.5c.414 0 .75.336.75.75v2c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2c0-.414.336-.75.75-.75zm3.5-8.25c-1.243 0-2.25 1.007-2.25 2.25V6H4.75c-.414 0-.75.336-.75.75s.336.75.75.75H9.5v.25c0 1.243 1.007 2.25 2.25 2.25S14 8.993 14 7.75V7.5h1.25c.414 0 .75-.336.75-.75S15.664 6 15.25 6H14v-.25c0-1.243-1.007-2.25-2.25-2.25zm0 1.5c.414 0 .75.336.75.75v2c0 .414-.336.75-.75.75S11 8.164 11 7.75v-2c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

SlidersInASquareFilled20.category = 'Interface General';

export default SlidersInASquareFilled20;
