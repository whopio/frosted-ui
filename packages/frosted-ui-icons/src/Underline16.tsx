import * as React from 'react';
import { IconProps } from './types';

export const Underline16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.83337 13.8333H12.1667M3.83337 1.78125V7C3.83337 9.3012 5.69885 11.1667 8.00004 11.1667C10.3012 11.1667 12.1667 9.3012 12.1667 7V1.78125"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Underline16;
