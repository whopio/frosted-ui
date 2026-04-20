import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M8 16.25C8.00016 15.1456 8.89553 14.25 10 14.25C11.1045 14.25 11.9998 15.1456 12 16.25C12 17.3546 11.1046 18.25 10 18.25C8.89543 18.25 8 17.3546 8 16.25ZM8 10C8.00016 8.89557 8.89553 8 10 8C11.1045 8 11.9998 8.89557 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10ZM8 3.75C8.00016 2.64557 8.89553 1.75 10 1.75C11.1045 1.75 11.9998 2.64557 12 3.75C12 4.85457 11.1046 5.75 10 5.75C8.89543 5.75 8 4.85457 8 3.75Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalFilled20.category = 'Interface General';

export default ThreeDotsVerticalFilled20;
