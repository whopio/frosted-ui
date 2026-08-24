import * as React from 'react';
import { IconProps } from './types';

export const TiktokFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TiktokFilled32"
      {...props}
    >
      <path
        d="M27.62 13.618c-2.372 0-4.57-.754-6.363-2.035v9.314c0 4.66-3.78 8.436-8.441 8.436-1.74 0-3.356-.525-4.699-1.427-2.256-1.514-3.742-4.089-3.742-7.01 0-4.658 3.78-8.435 8.441-8.435.388 0 .774.026 1.158.078v4.666c-.37-.117-.763-.18-1.172-.18-2.132 0-3.86 1.727-3.86 3.859 0 1.506.863 2.811 2.123 3.447.523.263 1.113.412 1.737.412 2.129 0 3.854-1.721 3.861-3.846V2.667h4.594v.587c.016.175.04.35.07.524.318 1.817 1.406 3.37 2.915 4.311 1.013.632 2.184.967 3.378.965v4.564z"
        fill={color}
      />
    </svg>
  );
};

TiktokFilled32.category = 'Social & Brands';

export default TiktokFilled32;
