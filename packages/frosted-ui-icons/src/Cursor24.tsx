import * as React from 'react';
import { IconProps } from './types';

export const Cursor24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Cursor24"
      {...props}
    >
      <path
        d="M1.863 3.604l6.781 17.89c.347.913 1.595 1.025 2.098.186l2.599-4.332c.335-.558 1.104-.652 1.564-.192l4.629 4.628c.298.298.703.466 1.125.466.879 0 1.59-.712 1.59-1.59 0-.423-.167-.828-.465-1.126l-4.629-4.628c-.46-.46-.365-1.23.193-1.565l4.332-2.6c.838-.502.727-1.75-.187-2.096L3.603 1.863c-1.088-.413-2.153.653-1.74 1.74z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Cursor24.category = 'Arrows';

export default Cursor24;
