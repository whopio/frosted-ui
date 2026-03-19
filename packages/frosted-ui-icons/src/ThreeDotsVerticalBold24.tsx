import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.0078 20.0146C10.008 18.9103 10.9035 18.0148 12.0078 18.0146C13.1121 18.0148 14.0076 18.9103 14.0078 20.0146C14.0077 21.119 13.1122 22.0145 12.0078 22.0146C10.9035 22.0145 10.008 21.119 10.0078 20.0146ZM10.0078 12.0078C10.0078 10.9034 10.9034 10.008 12.0078 10.0078C13.1122 10.008 14.0078 10.9034 14.0078 12.0078C14.0077 13.1122 13.1122 14.0077 12.0078 14.0078C10.9035 14.0077 10.008 13.1122 10.0078 12.0078ZM10.0078 3.98535C10.0078 2.88087 10.9034 1.9855 12.0078 1.98535C13.1123 1.9855 14.0078 2.88087 14.0078 3.98535C14.0075 5.08953 13.112 5.9852 12.0078 5.98535C10.9036 5.9852 10.0082 5.08953 10.0078 3.98535Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalBold24.category = 'Product Icons';

export default ThreeDotsVerticalBold24;
