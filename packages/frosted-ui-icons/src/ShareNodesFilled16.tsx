import * as React from 'react';
import { IconProps } from './types';

export const ShareNodesFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShareNodesFilled16"
      {...props}
    >
      <path
        d="M12 .999c1.657 0 3 1.344 3 3.001 0 1.657-1.343 3-3 3-.932 0-1.764-.425-2.314-1.092L6.913 7.295C6.968 7.52 7 7.757 7 8c0 .242-.032.476-.086.701l2.774 1.386C10.238 9.423 11.07 9 12 9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3c0-.19.017-.374.05-.554l-2.842-1.422C5.66 10.622 4.875 11 4 11c-1.657 0-3-1.343-3-3s1.343-3 3-3c.874 0 1.658.376 2.206.972L9.05 4.55C9.017 4.372 9 4.188 9 4 9 2.343 10.343.999 12 .999z"
        fill={color}
      />
    </svg>
  );
};

ShareNodesFilled16.category = 'Interface General';

export default ShareNodesFilled16;
