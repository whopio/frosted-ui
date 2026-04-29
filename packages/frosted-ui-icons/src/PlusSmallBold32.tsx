import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 7C16.5523 7 17 7.44772 17 8V15H24C24.5523 15 25 15.4477 25 16C25 16.5523 24.5523 17 24 17H17V24C17 24.5523 16.5523 25 16 25C15.4477 25 15 24.5523 15 24V17H8C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15H15V8C15 7.44772 15.4477 7 16 7Z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallBold32.category = 'Interface General';

export default PlusSmallBold32;
