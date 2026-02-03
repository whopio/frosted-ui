import * as React from 'react';
import { IconProps } from './types';

export const BanFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M20.9959 4.06368C22.8637 6.17922 23.9998 8.95617 23.9998 12.0001C23.9997 18.6273 18.627 23.9998 11.9999 24C8.95592 24 6.17898 22.864 4.06344 20.9961L20.9959 4.06368ZM11.9999 0.000244138C15.0433 0.000315617 17.8199 1.13589 19.9353 3.00314L3.0029 19.9356C1.13564 17.8202 4.76943e-05 15.0436 0 12.0001C0 5.37277 5.37253 0.000244138 11.9999 0.000244138Z"
        fill={color}
      />
    </svg>
  );
};

export default BanFilled24;
