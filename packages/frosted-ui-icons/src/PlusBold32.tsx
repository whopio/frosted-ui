import * as React from 'react';
import { IconProps } from './types';

export const PlusBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 1C16.5523 1 17 1.44772 17 2V15H30C30.5523 15 31 15.4477 31 16C31 16.5523 30.5523 17 30 17H17V30C17 30.5523 16.5523 31 16 31C15.4477 31 15 30.5523 15 30V17H2C1.44772 17 1 16.5523 1 16C1 15.4477 1.44772 15 2 15H15V2C15 1.44772 15.4477 1 16 1Z"
        fill={color}
      />
    </svg>
  );
};

PlusBold32.category = 'Interface General';

export default PlusBold32;
