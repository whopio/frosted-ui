import * as React from 'react';
import { IconProps } from './types';

export const InfoCircle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10.001 8.5C10.4146 8.50053 10.7508 8.83628 10.751 9.25V14.25C10.7508 14.6637 10.4146 14.9995 10.001 15C9.58689 15 9.25117 14.664 9.25098 14.25V9.25C9.25117 8.83595 9.58689 8.5 10.001 8.5ZM10.001 5C10.5527 5.00053 11.0008 5.44821 11.001 6C11.0008 6.55179 10.5527 6.99947 10.001 7C9.44881 7 9.00117 6.55212 9.00098 6C9.00117 5.44788 9.44881 5 10.001 5Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircle20.category = 'Interface General';

export default InfoCircle20;
