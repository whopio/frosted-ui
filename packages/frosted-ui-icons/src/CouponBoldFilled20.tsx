import * as React from 'react';
import { IconProps } from './types';

export const CouponBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CouponBoldFilled20"
      {...props}
    >
      <path
        d="M6.103 0c.723 0 1.252.491 1.45 1.049l.036.112.062.195C8.001 2.316 8.921 3 10 3c1.15 0 2.121-.778 2.411-1.839l.035-.112C12.645.49 13.174 0 13.898 0h1.352C16.769 0 18 1.231 18 2.75v14.5c0 1.519-1.231 2.75-2.75 2.75h-1.352c-.772 0-1.322-.56-1.487-1.161C12.121 17.779 11.151 17 10 17c-1.15 0-2.121.778-2.411 1.839C7.425 19.44 6.874 20 6.103 20H4.75C3.231 20 2 18.769 2 17.25V2.75C2 1.231 3.231 0 4.75 0h1.353z"
        fill={color}
      />
    </svg>
  );
};

CouponBoldFilled20.category = 'Money & Shopping';

export default CouponBoldFilled20;
