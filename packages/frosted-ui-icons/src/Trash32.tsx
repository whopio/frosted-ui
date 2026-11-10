import * as React from 'react';
import { IconProps } from './types';

export const Trash32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Trash32"
      {...props}
    >
      <path
        d="M22.464 7.25L21.41 5.113C20.393 3.053 18.296 1.75 16 1.75c-2.296 0-4.393 1.304-5.41 3.363L9.536 7.25m12.928 0H9.536m12.928 0h4.393m-17.321 0H5.143m-2.393 0h2.393m0 0l2.29 19.406c.242 2.05 1.98 3.594 4.043 3.594h9.048c2.064 0 3.801-1.544 4.043-3.594l2.29-19.406m0 0h2.393"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Trash32.category = 'Interface General';

export default Trash32;
