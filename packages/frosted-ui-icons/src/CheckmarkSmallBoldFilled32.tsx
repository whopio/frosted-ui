import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M24.1893 8.93951C24.7751 8.35375 25.7246 8.35373 26.3104 8.93951C26.8961 9.52529 26.8961 10.4749 26.3104 11.0606L12.8104 24.5606C12.2247 25.1463 11.2751 25.1462 10.6893 24.5606L4.68933 18.5606C4.10355 17.9748 4.10357 17.0253 4.68933 16.4395C5.27511 15.8537 6.22463 15.8537 6.81042 16.4395L11.7499 21.379L24.1893 8.93951Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBoldFilled32.category = 'Checkmarks';

export default CheckmarkSmallBoldFilled32;
