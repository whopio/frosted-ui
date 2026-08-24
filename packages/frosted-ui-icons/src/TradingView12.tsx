import * as React from 'react';
import { IconProps } from './types';

export const TradingView12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TradingView12"
      {...props}
    >
      <path
        d="M4.944 8.535H2.972V5.437H1V3.465h3.944v5.07zm3.943 0H6.634l2.112-5.07H11l-2.113 5.07zM6.634 5.718c.622 0 1.127-.504 1.127-1.126 0-.623-.505-1.127-1.127-1.127s-1.127.504-1.127 1.127c0 .622.505 1.126 1.127 1.126z"
        fill={color}
      />
    </svg>
  );
};

TradingView12.category = 'Social & Brands';

export default TradingView12;
