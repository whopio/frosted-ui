import * as React from 'react';
import { IconProps } from './types';

export const Stats20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Stats20"
      {...props}
    >
      <path
        d="M1.75 1.75c.414 0 .75.336.75.75v13c0 .69.56 1.25 1.25 1.25h14.531c.414 0 .75.336.75.75s-.335.75-.75.75H3.75C2.231 18.25 1 17.019 1 15.5v-13c0-.414.336-.75.75-.75zM17.25 5c.414 0 .75.336.75.75v3c0 .414-.336.75-.75.75s-.75-.336-.75-.75V7.56l-4.032 4.033c-.293.293-.768.293-1.06 0L9.124 9.31l-3.282 3.282c-.293.293-.768.293-1.06 0-.294-.293-.294-.768 0-1.06L8.594 7.72l.056-.052c.295-.24.73-.223 1.004.052l2.283 2.282L15.44 6.5h-1.19c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3z"
        fill={color}
      />
    </svg>
  );
};

Stats20.category = 'Stats & Charts';

export default Stats20;
