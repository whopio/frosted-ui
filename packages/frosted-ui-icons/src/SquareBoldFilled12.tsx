import * as React from 'react';
import { IconProps } from './types';

export const SquareBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12 8C12 10.2091 10.2091 12 8 12H4C1.79086 12 0 10.2091 0 8V4C0 1.79086 1.79086 0 4 0H8C10.2091 0 12 1.79086 12 4V8Z"
        fill={color}
      />
    </svg>
  );
};

SquareBoldFilled12.category = 'Interface General';

export default SquareBoldFilled12;
