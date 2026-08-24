import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracket12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFromBracket12"
      {...props}
    >
      <path
        d="M11.25 6c.414 0 .75.336.75.75v1.5C12 10.321 10.321 12 8.25 12h-4.5C1.679 12 0 10.321 0 8.25v-1.5C0 6.336.336 6 .75 6s.75.336.75.75v1.5c0 1.243 1.007 2.25 2.25 2.25h4.5c1.243 0 2.25-1.007 2.25-2.25v-1.5c0-.414.336-.75.75-.75zM5.293.334c.39-.39 1.023-.39 1.414 0L9.343 2.97c.293.293.293.768 0 1.06-.293.293-.768.293-1.06 0L6.75 2.498V7.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V2.498L3.718 4.03c-.293.293-.768.293-1.06 0-.294-.292-.294-.767 0-1.06L5.292.334z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracket12.category = 'Arrows';

export default ArrowUpFromBracket12;
