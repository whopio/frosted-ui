import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmall32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M24.7197 9.46978C25.0126 9.17692 25.4873 9.17689 25.7802 9.46978C26.073 9.76266 26.073 10.2375 25.7802 10.5303L12.2802 24.0303C11.9873 24.3232 11.5125 24.3231 11.2197 24.0303L5.21966 18.0303C4.92677 17.7374 4.92679 17.2627 5.21966 16.9698C5.51255 16.6769 5.98731 16.6769 6.2802 16.9698L11.7499 22.4395L24.7197 9.46978Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmall32.category = 'Checkmarks';

export default CheckmarkSmall32;
