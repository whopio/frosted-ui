import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M26.2852 7.73535C26.8455 7.2026 27.7319 7.22487 28.2646 7.78516C28.7974 8.34548 28.7751 9.23187 28.2148 9.76465L12.9648 24.2646C12.4489 24.7552 11.654 24.7766 11.1143 24.335L11.0098 24.2402L4.25977 17.4902C3.71303 16.9435 3.71303 16.0565 4.25977 15.5098C4.8065 14.963 5.69351 14.963 6.24023 15.5098L12.0244 21.2949L26.2852 7.73535Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkFilled32.category = 'Checkmarks';

export default CheckmarkFilled32;
