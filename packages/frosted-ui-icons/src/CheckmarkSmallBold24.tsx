import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18.5429 6.29298C18.9334 5.90271 19.5675 5.90254 19.9579 6.29298C20.3477 6.68341 20.3478 7.31669 19.9579 7.70704L9.45692 18.207C9.26945 18.3945 9.01499 18.4999 8.74989 18.5C8.48485 18.5 8.23034 18.3944 8.04286 18.207L3.79286 13.957C3.40236 13.5665 3.4024 12.9335 3.79286 12.543C4.18339 12.1525 4.8164 12.1525 5.20692 12.543L8.74989 16.0859L18.5429 6.29298Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBold24.category = 'Checkmarks';

export default CheckmarkSmallBold24;
