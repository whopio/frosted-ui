import * as React from 'react';
import { IconProps } from './types';

export const ClockBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ClockBold24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm0 2c-5.247 0-9.5 4.253-9.5 9.5s4.253 9.5 9.5 9.5 9.5-4.253 9.5-9.5-4.253-9.5-9.5-9.5zM11.75 5c.552 0 1 .448 1 1v6.019l2.875 2.3c.431.344.501.974.156 1.406-.345.43-.975.5-1.406.156l-3.25-2.6-.084-.076c-.185-.186-.29-.44-.291-.705V6c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

ClockBold24.category = 'Interface General';

export default ClockBold24;
