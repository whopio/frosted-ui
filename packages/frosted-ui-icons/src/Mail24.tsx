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
        d="M18.249 2c3.176 0 5.75 2.574 5.75 5.75v8.5c0 3.176-2.574 5.75-5.75 5.75H5.75C2.575 22 0 19.425 0 16.25v-8.5C0 4.574 2.575 2 5.75 2h12.499zM1.5 16.25c0 2.347 1.903 4.25 4.25 4.25h12.499c2.347 0 4.25-1.903 4.25-4.25V9.234l-9.4 3.775c-.705.283-1.492.282-2.198-.001L1.5 9.233v7.017zM5.75 3.5c-2.304 0-4.179 1.834-4.247 4.121l.046.016 9.911 3.98c.347.138.734.138 1.081 0l9.912-3.98c.014-.006.029-.01.043-.015C22.428 5.334 20.553 3.5 18.25 3.5H5.75z"
        fill={color}
      />
    </svg>
  );
};

Mail24.category = 'Communication';

export default Mail24;
