import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M23.4248 7.51465C23.7177 7.22178 24.1925 7.22176 24.4854 7.51465C24.7782 7.80754 24.7782 8.28231 24.4854 8.5752L9.88379 23.1777L19.8779 23.0283C20.2919 23.0222 20.6323 23.3527 20.6387 23.7666C20.6448 24.1806 20.3144 24.522 19.9004 24.5283L8.05664 24.7051C7.85394 24.7081 7.65801 24.6287 7.51465 24.4854C7.37129 24.342 7.29194 24.1461 7.29492 23.9434L7.47168 12.0996C7.47792 11.6855 7.81933 11.3552 8.2334 11.3613C8.6473 11.3678 8.97778 11.7081 8.97168 12.1221L8.82227 22.1162L23.4248 7.51465Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDownLeft32;
