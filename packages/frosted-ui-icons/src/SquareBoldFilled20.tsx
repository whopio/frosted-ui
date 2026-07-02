import * as React from 'react';
import { IconProps } from './types';

export const SquareBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19 13.4004C18.9998 16.4929 16.4929 18.9998 13.4004 19H6.59961C3.50713 18.9998 1.00021 16.4929 1 13.4004V6.59961C1.00021 3.50712 3.50712 1.00021 6.59961 1H13.4004C16.4929 1.00021 18.9998 3.50712 19 6.59961V13.4004Z"
        fill={color}
      />
    </svg>
  );
};

SquareBoldFilled20.category = 'Interface General';

export default SquareBoldFilled20;
