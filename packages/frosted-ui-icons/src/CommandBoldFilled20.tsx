import * as React from 'react';
import { IconProps } from './types';

export const CommandBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.25 7.25V4.5C7.25 2.98122 6.01878 1.75 4.5 1.75C2.98122 1.75 1.75 2.98122 1.75 4.5C1.75 6.01878 2.98122 7.25 4.5 7.25H7.25ZM7.25 7.25V12.75M7.25 7.25H12.75M7.25 12.75H12.75M7.25 12.75H4.5C2.98122 12.75 1.75 13.9812 1.75 15.5C1.75 17.0188 2.98122 18.25 4.5 18.25C6.01878 18.25 7.25 17.0188 7.25 15.5V12.75ZM12.75 12.75V7.25M12.75 12.75V15.5C12.75 17.0188 13.9812 18.25 15.5 18.25C17.0188 18.25 18.25 17.0188 18.25 15.5C18.25 13.9812 17.0188 12.75 15.5 12.75H12.75ZM12.75 7.25V4.5C12.75 2.98122 13.9812 1.75 15.5 1.75C17.0188 1.75 18.25 2.98122 18.25 4.5C18.25 6.01878 17.0188 7.25 15.5 7.25H12.75Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

CommandBoldFilled20.category = 'Product Icons';

export default CommandBoldFilled20;
