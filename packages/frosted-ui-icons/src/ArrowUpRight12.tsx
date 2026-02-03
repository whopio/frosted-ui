import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRight12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.69067 1.53882C9.89694 1.53293 10.0965 1.61166 10.2424 1.75757C10.3883 1.90348 10.4671 2.10308 10.4612 2.30933L10.2844 8.49683C10.2723 8.91064 9.9278 9.23619 9.51392 9.22437C9.10001 9.2125 8.77472 8.86774 8.78638 8.45386L8.90942 4.15112L2.81763 10.2429C2.52472 10.5356 2.0499 10.5357 1.75708 10.2429C1.46427 9.9501 1.46442 9.47529 1.75708 9.18237L7.84888 3.09058L3.54614 3.21362C3.13226 3.22531 2.78753 2.89998 2.77563 2.48608C2.76381 2.07218 3.08933 1.72763 3.50317 1.71558L9.69067 1.53882Z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRight12.category = 'Arrows';

export default ArrowUpRight12;
