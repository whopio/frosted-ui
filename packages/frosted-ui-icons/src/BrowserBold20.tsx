import * as React from 'react';
import { IconProps } from './types';

export const BrowserBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserBold20"
      {...props}
    >
      <path
        d="M15 2C17.2091 2 19 3.79086 19 6V14C19 16.2091 17.2091 18 15 18H5C2.79086 18 1 16.2091 1 14V6C1 3.79086 2.79086 2 5 2H15ZM3 10V14C3 15.1046 3.89543 16 5 16H15C16.1046 16 17 15.1046 17 14V10H3ZM5 4C3.89543 4 3 4.89543 3 6V8H17V6C17 4.89543 16.1046 4 15 4H5ZM5 5C5.55228 5 6 5.44772 6 6C6 6.55228 5.55228 7 5 7C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5ZM8 5C8.55228 5 9 5.44772 9 6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6C7 5.44772 7.44772 5 8 5ZM11 5C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7C10.4477 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5Z"
        fill={color}
      />
    </svg>
  );
};

BrowserBold20.category = 'Interface General';

export default BrowserBold20;
