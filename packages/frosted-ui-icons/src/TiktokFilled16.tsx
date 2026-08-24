import * as React from 'react';
import { IconProps } from './types';

export const TiktokFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TiktokFilled16"
      {...props}
    >
      <path
        d="M13.81 6.809c-1.186 0-2.285-.377-3.182-1.018v4.657c0 2.33-1.89 4.219-4.22 4.219-.87 0-1.678-.263-2.35-.714-1.128-.757-1.87-2.044-1.87-3.505 0-2.33 1.89-4.218 4.22-4.218.194 0 .387.013.58.04v2.333c-.186-.059-.383-.09-.587-.09-1.066 0-1.93.863-1.93 1.929 0 .753.432 1.406 1.062 1.723.26.132.556.206.868.206 1.064 0 1.927-.86 1.93-1.923V1.333h2.297v.294c.008.088.02.175.035.262.16.909.703 1.685 1.458 2.156.506.316 1.092.483 1.69.482v2.282z"
        fill={color}
      />
    </svg>
  );
};

TiktokFilled16.category = 'Social & Brands';

export default TiktokFilled16;
