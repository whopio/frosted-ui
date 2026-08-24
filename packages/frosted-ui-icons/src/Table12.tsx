import * as React from 'react';
import { IconProps } from './types';

export const Table12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Table12"
      {...props}
    >
      <path
        d="M8.25 0C10.321 0 12 1.679 12 3.75v4.5C12 10.321 10.321 12 8.25 12h-4.5C1.679 12 0 10.321 0 8.25v-4.5C0 1.679 1.679 0 3.75 0h4.5zm-3 10.5h3c1.243 0 2.25-1.007 2.25-2.25v-3H5.25v5.25zM1.5 8.25c0 1.243 1.007 2.25 2.25 2.25V5.25H1.5v3zm3.75-4.5h5.25c0-1.243-1.007-2.25-2.25-2.25h-3v2.25zM3.75 1.5C2.507 1.5 1.5 2.507 1.5 3.75h2.25V1.5z"
        fill={color}
      />
    </svg>
  );
};

Table12.category = 'Interface General';

export default Table12;
