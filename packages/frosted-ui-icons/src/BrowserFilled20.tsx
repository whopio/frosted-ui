import * as React from 'react';
import { IconProps } from './types';

export const BrowserFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserFilled20"
      {...props}
    >
      <path
        d="M19 14.25C19 16.3211 17.3211 18 15.25 18H4.75C2.67893 18 1 16.3211 1 14.25V9.5H19V14.25ZM15.25 2C17.3211 2 19 3.67893 19 5.75V8H1V5.75C1 3.67893 2.67893 2 4.75 2H15.25ZM4 4.25C3.44772 4.25 3 4.69772 3 5.25C3 5.80228 3.44772 6.25 4 6.25C4.55228 6.25 5 5.80228 5 5.25C5 4.69772 4.55228 4.25 4 4.25ZM7 4.25C6.44772 4.25 6 4.69772 6 5.25C6 5.80228 6.44772 6.25 7 6.25C7.55228 6.25 8 5.80228 8 5.25C8 4.69772 7.55228 4.25 7 4.25ZM10 4.25C9.44771 4.25 9 4.69772 9 5.25C9 5.80228 9.44771 6.25 10 6.25C10.5523 6.25 11 5.80228 11 5.25C11 4.69772 10.5523 4.25 10 4.25Z"
        fill={color}
      />
    </svg>
  );
};

BrowserFilled20.category = 'Interface General';

export default BrowserFilled20;
