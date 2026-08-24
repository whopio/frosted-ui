import * as React from 'react';
import { IconProps } from './types';

export const CursorBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CursorBold20"
      {...props}
    >
      <path
        d="M6.724 17.29L2.139 4.244c-.458-1.306.798-2.562 2.104-2.104l13.048 4.585c.878.309 1 1.502.201 1.98l-3.144 1.887c-.558.335-.652 1.105-.192 1.565l3.43 3.43c.265.265.414.625.414 1 0 .78-.633 1.414-1.414 1.414-.375 0-.735-.149-1-.414l-3.43-3.43c-.46-.46-1.23-.366-1.565.192l-1.886 3.144c-.48.799-1.672.677-1.981-.201z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

CursorBold20.category = 'Arrows';

export default CursorBold20;
