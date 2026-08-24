import * as React from 'react';
import { IconProps } from './types';

export const Expand12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Expand12"
      {...props}
    >
      <path
        d="M3.97 6.97c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L2.56 10.5H4.5c.414 0 .75.336.75.75s-.336.75-.75.75H.75c-.414 0-.75-.336-.75-.75V7.5c0-.414.336-.75.75-.75s.75.336.75.75v1.94l2.47-2.47zM11.25 0c.414 0 .75.336.75.75V4.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75V2.56L8.03 5.03c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06L9.44 1.5H7.5c-.414 0-.75-.336-.75-.75S7.086 0 7.5 0h3.75z"
        fill={color}
      />
    </svg>
  );
};

Expand12.category = 'Arrows';

export default Expand12;
