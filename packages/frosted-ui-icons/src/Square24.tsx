import * as React from 'react';
import { IconProps } from './types';

export const Square24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <rect x="1.75" y="1.75" width="20.5" height="20.5" rx="5.75" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

Square24.category = 'Interface General';

export default Square24;
