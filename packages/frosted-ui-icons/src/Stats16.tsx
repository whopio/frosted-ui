import * as React from 'react';
import { IconProps } from './types';

export const Stats16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Stats16"
      {...props}
    >
      <path
        d="M1.25 1c.414 0 .75.336.75.75v11c0 .414.336.75.75.75h12c.414 0 .75.336.75.75s-.336.75-.75.75h-12C1.507 15 .5 13.993.5 12.75v-11c0-.414.336-.75.75-.75zm13 2c.414 0 .75.336.75.75v2.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.69l-2.97 2.97c-.293.293-.767.293-1.06 0L7.75 6.81 5.03 9.53c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l3.25-3.25.056-.052c.295-.24.73-.223 1.004.052L10 6.94l2.44-2.44h-.69c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.5z"
        fill={color}
      />
    </svg>
  );
};

Stats16.category = 'Stats & Charts';

export default Stats16;
