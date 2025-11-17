import * as React from 'react';
import { IconProps } from './types';

export const SquareAdd16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.16667 13.5H3.83333C3.09695 13.5 2.5 12.9031 2.5 12.1667V3.83333C2.5 3.09695 3.09695 2.5 3.83333 2.5H5.83333H10.1667H12.1667C12.9031 2.5 13.5 3.09695 13.5 3.83333V7.5M12.1667 9.5V11.5M12.1667 11.5V13.5M12.1667 11.5H10.1667M12.1667 11.5H14.1667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SquareAdd16;
