import * as React from 'react';
import { IconProps } from './types';

export const Circle20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <circle cx="10" cy="10" r="8.25" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

Circle20.category = 'Product Icons';

export default Circle20;
