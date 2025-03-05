import * as React from 'react';
import { IconProps } from './types';

export const Reply24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.91458 11.6275L10.416 3.998C10.7379 3.7091 11.2499 3.93757 11.2499 4.37012V8.49958C19.7499 8.49958 21.9999 11.7496 21.9999 20.2496C20.4999 17.2496 19.7499 15.4996 11.2499 15.4996V19.629C11.2499 20.0616 10.7379 20.2901 10.416 20.0012L1.91458 12.3717C1.69319 12.173 1.69319 11.8261 1.91458 11.6275Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Reply24;
