import * as React from 'react';
import { IconProps } from './types';

export const ReplyBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.9995 26.7704C15.9994 28.3016 14.1721 29.0941 13.0542 28.0477L1.74562 17.4598C0.901851 16.6696 0.901852 15.3302 1.74562 14.5399L13.0542 3.95204L13.1607 3.85926C14.2842 2.95568 15.9994 3.7459 15.9995 5.22938V10.0175C21.8881 10.2126 25.6852 12.1483 27.9878 15.2216C30.373 18.4051 30.9995 22.6133 30.9995 26.7499C30.9995 27.1665 30.7411 27.5399 30.3511 27.6864C29.9612 27.8327 29.5218 27.7215 29.2476 27.4081C26.9879 24.8256 24.7509 23.4971 22.4614 22.7958C20.4292 22.1733 18.3144 22.0295 15.9995 22.0038V26.7704Z"
        fill={color}
      />
    </svg>
  );
};

ReplyBoldFilled32.category = 'Arrows';

export default ReplyBoldFilled32;
