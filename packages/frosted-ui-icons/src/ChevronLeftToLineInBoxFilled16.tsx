import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftToLineInBoxFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftToLineInBoxFilled16"
      {...props}
    >
      <path
        d="M11.75 0C14.097 0 16 1.903 16 4.25v7.5c0 2.347-1.903 4.25-4.25 4.25h-7.5C1.903 16 0 14.097 0 11.75v-7.5C0 1.903 1.903 0 4.25 0h7.5zm-6.5 4c-.414 0-.75.336-.75.75v6.5c0 .414.336.75.75.75s.75-.336.75-.75v-6.5C6 4.336 5.664 4 5.25 4zm6.509.2c-.305-.281-.779-.263-1.06.041l-3 3.25c-.265.288-.265.73 0 1.018l3 3.25c.281.304.755.323 1.06.042.304-.281.322-.755.042-1.06l-2.532-2.74 2.532-2.742c.28-.304.261-.779-.042-1.06z"
        fill={color}
      />
    </svg>
  );
};

ChevronLeftToLineInBoxFilled16.category = 'Interface General';

export default ChevronLeftToLineInBoxFilled16;
