import * as React from 'react';
import { IconProps } from './types';

export const Mail24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Mail24"
      {...props}
    >
      <path
        d="M17.249 2c3.176 0 5.75 2.574 5.75 5.75v8.5c0 3.176-2.574 5.75-5.75 5.75H6.75C3.575 22 1 19.425 1 16.25v-8.5C1 4.574 3.575 2 6.75 2h10.499zM2.5 16.25c0 2.347 1.903 4.25 4.25 4.25h10.499c2.347 0 4.25-1.903 4.25-4.25V9.637l-8.4 3.372c-.705.283-1.492.283-2.198 0L2.5 9.636v6.614zM6.75 3.5C4.403 3.5 2.5 5.403 2.5 7.75v.269l8.96 3.598c.346.14.734.14 1.081 0l8.958-3.597v-.27c0-2.347-1.903-4.25-4.25-4.25H6.75z"
        fill={color}
      />
    </svg>
  );
};

Mail24.category = 'Communication';

export default Mail24;
