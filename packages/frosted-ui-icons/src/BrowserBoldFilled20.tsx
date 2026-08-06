import * as React from 'react';
import { IconProps } from './types';

export const BrowserBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserBoldFilled20"
      {...props}
    >
      <path
        d="M19 14C19 16.2091 17.2091 18 15 18H5C2.79086 18 1 16.2091 1 14V10H19V14ZM15 2C17.2091 2 19 3.79086 19 6V8H1V6C1 3.79086 2.79086 2 5 2H15ZM4 4.25C3.44772 4.25 3 4.69772 3 5.25C3 5.80228 3.44772 6.25 4 6.25C4.55228 6.25 5 5.80228 5 5.25C5 4.69772 4.55228 4.25 4 4.25ZM7 4.25C6.44772 4.25 6 4.69772 6 5.25C6 5.80228 6.44772 6.25 7 6.25C7.55228 6.25 8 5.80228 8 5.25C8 4.69772 7.55228 4.25 7 4.25ZM10 4.25C9.44771 4.25 9 4.69772 9 5.25C9 5.80228 9.44771 6.25 10 6.25C10.5523 6.25 11 5.80228 11 5.25C11 4.69772 10.5523 4.25 10 4.25Z"
        fill={color}
      />
    </svg>
  );
};

BrowserBoldFilled20.category = 'Interface General';

export default BrowserBoldFilled20;
