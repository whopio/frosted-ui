import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkBold24"
      {...props}
    >
      <path
        d="M21.293 4.568c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L8.892 19.797c-.39.39-1.024.39-1.414 0l-6.185-6.185c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0l5.478 5.477L21.293 4.568z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkBold24.category = 'Checkmarks';

export default CheckmarkBold24;
