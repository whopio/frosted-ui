import * as React from 'react';
import { IconProps } from './types';

export const CardStackFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackFilled20"
      {...props}
    >
      <path
        d="M15.754 7.5c2.006 0 3.534 1.801 3.206 3.781l-.829 5C17.871 17.85 16.515 19 14.925 19H5.08c-1.59 0-2.947-1.15-3.207-2.719l-.828-5C.716 9.301 2.244 7.501 4.25 7.5h11.503zM14.968 4c1.375 0 2.482 1.051 2.612 2.363C17.02 6.13 16.403 6 15.753 6H4.25c-.649 0-1.263.129-1.82.36C2.56 5.05 3.665 4 5.04 4h9.928zM12.85 1c1.06 0 1.955.625 2.372 1.508-.084-.005-.168-.008-.254-.008H5.04c-.086 0-.17.003-.254.008C5.203 1.625 6.099 1 7.158 1h5.692z"
        fill={color}
      />
    </svg>
  );
};

CardStackFilled20.category = 'Interface General';

export default CardStackFilled20;
