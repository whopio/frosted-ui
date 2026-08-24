import * as React from 'react';
import { IconProps } from './types';

export const ShareNodesFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShareNodesFilled32"
      {...props}
    >
      <path
        d="M25 1c3.314 0 6 2.687 6 6 0 3.314-2.686 6-6 6-2.165 0-4.061-1.147-5.116-2.866l-7.308 3.654c.272.685.424 1.43.424 2.212 0 .78-.151 1.524-.422 2.207l7.308 3.654C20.942 20.145 22.837 19 25 19c3.314 0 6 2.686 6 6 0 3.313-2.686 6-6 6s-6-2.687-6-6c0-.618.093-1.213.266-1.774l-7.41-3.704C10.764 21.023 8.996 22 7 22c-3.314 0-6-2.686-6-6 0-3.313 2.686-6 6-6 1.995 0 3.762.975 4.852 2.473l7.412-3.706C19.092 8.21 19 7.615 19 7c0-3.313 2.686-6 6-6z"
        fill={color}
      />
    </svg>
  );
};

ShareNodesFilled32.category = 'Interface General';

export default ShareNodesFilled32;
