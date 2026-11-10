import * as React from 'react';
import { IconProps } from './types';

export const PencilFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PencilFilled32"
      {...props}
    >
      <path
        d="M24.376 16.436L12.281 28.53c-.115.116-.265.19-.427.213l-9 1.25c-.232.033-.467-.047-.633-.213-.167-.166-.246-.4-.213-.634l1.25-9c.022-.161.097-.31.213-.426L15.565 7.624l8.811 8.812zM23.563 2c1.52 0 2.977.604 4.051 1.678l.71.708C29.397 5.46 30 6.918 30 8.437c0 1.52-.604 2.977-1.678 4.051l-2.887 2.887-8.811-8.812 2.887-2.885C20.586 2.603 22.044 2 23.564 2z"
        fill={color}
      />
    </svg>
  );
};

PencilFilled32.category = 'Objects';

export default PencilFilled32;
