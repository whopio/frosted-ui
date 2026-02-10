import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.4684 9.89446C16.175 10.3228 16.1746 11.3484 15.4674 11.7763L8.90312 15.7478C8.34618 16.0846 7.64747 16.0839 7.09066 15.7469L0.530261 11.7763C-0.176373 11.3483 -0.176907 10.3229 0.529285 9.89446L2.20698 8.87788L6.31529 11.3651C7.34937 11.991 8.64613 11.9915 9.68044 11.3661L13.7907 8.87788L15.4684 9.89446ZM7.09163 0.253076C7.64853 -0.0841219 8.34705 -0.0838023 8.90409 0.253076L15.4694 4.22759C16.1764 4.65582 16.1757 5.68249 15.4684 6.11036L8.90409 10.081C8.3471 10.4179 7.64854 10.4181 7.09163 10.081L0.531238 6.10939C-0.17539 5.68133 -0.176342 4.65579 0.530261 4.22759L7.09163 0.253076Z"
        fill={color}
      />
    </svg>
  );
};

ConnectionFilled16.category = 'Interface General';

export default ConnectionFilled16;
