import * as React from 'react';
import { IconProps } from './types';

export const RotateRight12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateRight12"
      {...props}
    >
      <path
        d="M6 0c1.793 0 3.4.786 4.5 2.031V1.25c0-.414.336-.75.75-.75s.75.336.75.75v3c0 .414-.336.75-.75.75h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.49c-.809-1.206-2.181-2-3.74-2-1.957 0-3.624 1.25-4.243 2.997C1.59 4.966 1.5 5.472 1.5 6c0 .528.09 1.034.257 1.503C2.376 9.25 4.043 10.5 6 10.5c1.957 0 3.624-1.25 4.243-2.997.138-.39.567-.595.957-.457.39.138.596.567.457.958C10.833 10.33 8.612 12 6 12S1.167 10.331.343 8.004C.12 7.376 0 6.7 0 6c0-.701.12-1.376.343-2.004C1.167 1.67 3.388 0 6 0z"
        fill={color}
      />
    </svg>
  );
};

RotateRight12.category = 'Arrows';

export default RotateRight12;
