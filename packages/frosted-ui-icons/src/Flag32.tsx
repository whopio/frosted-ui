import * as React from 'react';
import { IconProps } from './types';

export const Flag32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.33337 20.1111V5.86553C6.33337 5.35819 6.62096 4.89539 7.09188 4.70667C8.1038 4.30117 9.98607 3.66669 11.8572 3.66669C14.6071 3.66669 17.393 6.40743 20.1428 6.40743C21.402 6.40743 22.6663 6.12009 23.667 5.80855C24.6107 5.51474 25.6667 6.19453 25.6667 7.18291V19.2827C25.6667 19.79 25.3791 20.2528 24.9082 20.4415C23.8963 20.8471 22.014 21.4815 20.1428 21.4815C17.393 21.4815 14.6071 18.7408 11.8572 18.7408C9.10731 18.7408 6.33337 20.1111 6.33337 20.1111ZM6.33337 20.1111V28.3334"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Flag32;
