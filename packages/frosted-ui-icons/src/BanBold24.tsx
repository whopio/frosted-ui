import * as React from 'react';
import { IconProps } from './types';

export const BanBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BanBold24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zM6.027 19.386C7.66 20.707 9.737 21.5 12 21.5c5.247 0 9.5-4.253 9.5-9.5 0-2.263-.793-4.34-2.114-5.973L6.027 19.386zM12 2.5c-5.247 0-9.5 4.253-9.5 9.5 0 2.263.792 4.34 2.113 5.972L17.972 4.613C16.34 3.293 14.262 2.5 12 2.5z"
        fill={color}
      />
    </svg>
  );
};

BanBold24.category = 'Interface General';

export default BanBold24;
