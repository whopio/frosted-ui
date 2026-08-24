import * as React from 'react';
import { IconProps } from './types';

export const PineTreeFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PineTreeFilled12"
      {...props}
    >
      <path
        d="M5.317.29c.371-.385.994-.385 1.365 0l.075.089 3.098 4.099C10.328 5.103 9.88 6 9.097 6h-.113l1.834 2.486c.462.627.014 1.514-.765 1.514H6.75v1.25c0 .414-.336.75-.75.75-.415 0-.75-.336-.75-.75V10H1.946c-.78 0-1.227-.886-.765-1.514L3.015 6h-.114c-.784 0-1.23-.897-.758-1.522L5.242.379 5.317.29z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PineTreeFilled12.category = 'Nature & Weather';

export default PineTreeFilled12;
