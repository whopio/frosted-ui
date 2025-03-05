import * as React from 'react';
import { IconProps } from './types';

export const StarFilled32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M23.4095 27.7502C23.1235 27.7502 22.8355 27.6802 22.5705 27.5362L16.1245 24.0612C16.0455 24.0182 15.9515 24.0182 15.8725 24.0612L9.42654 27.5362C8.82254 27.8632 8.10254 27.8122 7.54854 27.4082C6.99654 27.0062 6.73153 26.3392 6.85653 25.6672L8.19054 18.5132C8.20654 18.4272 8.17854 18.3412 8.11454 18.2822L2.80154 13.2722C2.30254 12.8012 2.12454 12.1052 2.33554 11.4542C2.54654 10.8022 3.10154 10.3422 3.78354 10.2522L11.0495 9.30118C11.1385 9.28918 11.2145 9.23518 11.2525 9.15518L14.4115 2.58218C14.7075 1.96718 15.3165 1.58417 16.0005 1.58417C16.6845 1.58417 17.2935 1.96719 17.5895 2.58319L20.7475 9.15417C20.7865 9.23417 20.8615 9.28917 20.9495 9.30017L28.2175 10.2532C28.8985 10.3422 29.4535 10.8022 29.6645 11.4542C29.8755 12.1052 29.6965 12.8022 29.1985 13.2712L23.8865 18.2812C23.8225 18.3422 23.7935 18.4272 23.8095 18.5122L25.1435 25.6672C25.2685 26.3392 25.0025 27.0062 24.4505 27.4082C24.1395 27.6352 23.7775 27.7502 23.4125 27.7502H23.4095Z"
        fill={color}
      />
    </svg>
  );
};

export default StarFilled32;
