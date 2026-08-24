import * as React from 'react';
import { IconProps } from './types';

export const Mail20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Mail20"
      {...props}
    >
      <path
        d="M15.249 2c2.623 0 4.75 2.127 4.75 4.75v6.5c0 2.623-2.127 4.75-4.75 4.75H4.75C2.127 18 0 15.873 0 13.25v-6.5C0 4.127 2.127 2 4.75 2h10.499zm-4.316 8.964c-.6.235-1.266.235-1.866 0L1.5 7.99v5.26c0 1.795 1.455 3.25 3.25 3.25h10.499c1.795 0 3.25-1.455 3.25-3.25V7.99l-7.566 2.974zM4.75 3.5c-1.672 0-3.048 1.262-3.23 2.886l8.096 3.182c.247.097.521.097.768 0l8.095-3.181C18.297 4.763 16.92 3.5 15.248 3.5H4.75z"
        fill={color}
      />
    </svg>
  );
};

Mail20.category = 'Communication';

export default Mail20;
