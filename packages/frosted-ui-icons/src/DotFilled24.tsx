import * as React from 'react';
import { IconProps } from './types';

export const DotFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DotFilled24"
      {...props}
    >
      <path d="M6 12c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z" fill={color} />
    </svg>
  );
};

DotFilled24.category = 'Interface General';

export default DotFilled24;
