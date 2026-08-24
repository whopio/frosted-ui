import * as React from 'react';
import { IconProps } from './types';

export const RotateRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateRight20"
      {...props}
    >
      <path
        d="M10 .5c3.36 0 6.311 1.745 8 4.377V2.25c0-.414.336-.75.75-.75s.75.336.75.75v5c0 .414-.336.75-.75.75h-5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.444C15.896 3.836 13.162 2 10 2 6.462 2 3.458 4.297 2.403 7.483 2.142 8.273 2 9.12 2 10c0 .88.142 1.726.403 2.517C3.458 15.703 6.462 18 10 18c3.538 0 6.542-2.297 7.597-5.483.13-.394.554-.607.947-.477.393.13.607.555.476.948C17.768 16.77 14.204 19.5 10 19.5S2.232 16.77.98 12.988C.667 12.048.5 11.043.5 10s.168-2.048.48-2.988C2.231 3.23 5.795.5 10 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateRight20.category = 'Arrows';

export default RotateRight20;
