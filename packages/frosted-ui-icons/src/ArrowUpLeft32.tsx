import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeft32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.9003 7.47168C20.3143 7.47794 20.6447 7.81935 20.6385 8.2334C20.6321 8.6473 20.2918 8.97778 19.8778 8.97168L9.88367 8.82227L24.4852 23.4248C24.7781 23.7177 24.7781 24.1925 24.4852 24.4854C24.1924 24.7782 23.7176 24.7782 23.4247 24.4854L8.82214 9.88379L8.97156 19.8779C8.97766 20.2919 8.64719 20.6323 8.23328 20.6387C7.81924 20.6448 7.47784 20.3144 7.47156 19.9004L7.2948 8.05664C7.29181 7.85393 7.37117 7.65801 7.51453 7.51465C7.65789 7.37129 7.8538 7.29194 8.05652 7.29492L19.9003 7.47168Z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpLeft32.category = 'Arrows';

export default ArrowUpLeft32;
