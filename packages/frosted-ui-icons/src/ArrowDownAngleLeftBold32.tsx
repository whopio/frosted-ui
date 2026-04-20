import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M30 4.75C30.5522 4.75004 31 5.19775 31 5.75V17.5C31 19.433 29.433 21 27.5 21H4.48242L9.19336 25.5293C9.59122 25.9121 9.60338 26.5453 9.2207 26.9434C8.8379 27.3413 8.20468 27.3534 7.80664 26.9707L1.30664 20.7207C1.11068 20.5322 1 20.2719 1 20C1 19.7281 1.11068 19.4678 1.30664 19.2793L7.80664 13.0293C8.20468 12.6466 8.8379 12.6587 9.2207 13.0566C9.60338 13.4547 9.59122 14.0879 9.19336 14.4707L4.48242 19H27.5C28.3284 19 29 18.3284 29 17.5V5.75C29 5.19772 29.4477 4.75 30 4.75Z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleLeftBold32.category = 'Arrows';

export default ArrowDownAngleLeftBold32;
