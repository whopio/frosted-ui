import * as React from 'react';
import { IconProps } from './types';

export const Venmo24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Venmo24"
      {...props}
    >
      <path
        d="M22.92 5.25c0-1.708-.36-3.07-1.157-4.385-.042-.07-.124-.105-.204-.089l-6.936 1.356c-.127.025-.196.165-.143.283.402.898.653 1.989.653 3.531 0 2.908-2.017 7.1-3.776 9.969-.097.157-.335.104-.358-.08L9.145 1.43c-.013-.106-.108-.181-.214-.172l-7.638.7c-.115.011-.196.117-.176.231l3.618 20.898c.016.095.098.164.194.164h8.921c.06 0 .117-.027.155-.075 4.01-5.109 8.915-12.347 8.915-17.925z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Venmo24.category = 'Social & Brands';

export default Venmo24;
