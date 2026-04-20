import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M24.543 9.29321C24.9335 8.90272 25.5665 8.9027 25.957 9.29321C26.3474 9.68373 26.3475 10.3168 25.957 10.7073L12.457 24.2073C12.0665 24.5977 11.4335 24.5977 11.043 24.2073L5.04297 18.2073C4.65245 17.8168 4.65247 17.1837 5.04297 16.7932C5.43349 16.4027 6.06651 16.4027 6.45703 16.7932L11.75 22.0862L24.543 9.29321Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkSmallBold32.category = 'Checkmarks';

export default CheckmarkSmallBold32;
