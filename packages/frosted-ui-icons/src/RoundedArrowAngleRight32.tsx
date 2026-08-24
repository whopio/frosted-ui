import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRight32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleRight32"
      {...props}
    >
      <path
        d="M11.502 31c-5.8 0-10.5-4.702-10.5-10.501 0-5.8 4.7-10.501 10.5-10.501h16.963l-7.68-7.719c-.293-.293-.292-.768.001-1.06.294-.293.769-.292 1.06.001l8.94 8.983c.291.293.291.766 0 1.059l-8.94 8.982c-.291.293-.766.294-1.06.002-.293-.292-.294-.767-.002-1.06l7.65-7.688H11.502c-4.97 0-9 4.03-9 9 0 4.972 4.03 9.002 9 9.002h3.918c.414 0 .75.336.75.75s-.336.75-.75.75h-3.918z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRight32.category = 'Arrows';

export default RoundedArrowAngleRight32;
