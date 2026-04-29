import * as React from 'react';
import { IconProps } from './types';

export const XMark12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.96973 0.969879C10.2626 0.677265 10.7375 0.677117 11.0303 0.969879C11.3229 1.2627 11.3228 1.73758 11.0303 2.03043L7.06055 6.00015L11.0303 9.9689C11.323 10.2616 11.3227 10.7365 11.0303 11.0294C10.7374 11.3223 10.2626 11.3223 9.96973 11.0294L6 7.0607L2.03027 11.0304C1.73744 11.3233 1.26263 11.3231 0.969727 11.0304C0.676877 10.7375 0.676854 10.2628 0.969727 9.96988L4.93945 6.00015L0.969727 2.03043C0.676905 1.7376 0.677049 1.26279 0.969727 0.969879C1.26264 0.677187 1.73745 0.677053 2.03027 0.969879L6 4.93961L9.96973 0.969879Z"
        fill={color}
      />
    </svg>
  );
};

XMark12.category = 'Interface General';

export default XMark12;
