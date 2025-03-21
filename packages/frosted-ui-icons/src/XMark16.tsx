import * as React from 'react';
import { IconProps } from './types';

export const XMark16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.9497 4.1109C13.2426 3.818 13.2426 3.34313 12.9497 3.05024C12.6568 2.75734 12.182 2.75734 11.8891 3.05024L7.99997 6.93934L4.1109 3.05027C3.818 2.75738 3.34313 2.75738 3.05024 3.05027C2.75734 3.34316 2.75734 3.81804 3.05024 4.11093L6.93931 8L3.05024 11.8891C2.75734 12.182 2.75734 12.6568 3.05024 12.9497C3.34313 13.2426 3.818 13.2426 4.1109 12.9497L7.99997 9.06066L11.8891 12.9498C12.182 13.2427 12.6568 13.2427 12.9497 12.9498C13.2426 12.6569 13.2426 12.182 12.9497 11.8891L9.06063 8L12.9497 4.1109Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default XMark16;
