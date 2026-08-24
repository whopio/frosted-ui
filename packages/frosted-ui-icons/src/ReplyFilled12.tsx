import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReplyFilled12"
      {...props}
    >
      <path
        d="M6.5 10.05c0 .823-.975 1.257-1.586.707L.579 6.854C.07 6.398.07 5.602.579 5.145l4.335-3.902C5.525.693 6.5 1.127 6.5 1.95v1.325c2.222.14 3.655.92 4.499 2.185.887 1.33 1 3.04 1 4.54 0 .313-.193.593-.486.703-.292.11-.622.027-.828-.208-.783-.895-1.533-1.312-2.29-1.521-.59-.163-1.201-.207-1.895-.22v1.298z"
        fill={color}
      />
    </svg>
  );
};

ReplyFilled12.category = 'Arrows';

export default ReplyFilled12;
