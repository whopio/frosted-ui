import * as React from 'react';
import { IconProps } from './types';

export const RotateBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateBoldFilled20"
      {...props}
    >
      <path
        d="M18 11c.828 0 1.5.672 1.5 1.5v4c0 .828-.672 1.5-1.5 1.5-.697 0-1.282-.476-1.45-1.121C14.846 18.5 12.54 19.499 10 19.5c-3.758 0-7.005-2.183-8.545-5.343-.183-.376-.342-.767-.476-1.17-.26-.786.167-1.634.953-1.894.786-.26 1.635.166 1.895.952.091.274.2.54.325.798C5.21 15.01 7.433 16.5 10.001 16.5c2.08 0 3.932-.977 5.123-2.5H14c-.828 0-1.5-.672-1.5-1.5S13.172 11 14 11h4zM10.001.5c4.205 0 7.768 2.732 9.02 6.513.26.786-.167 1.634-.953 1.894-.786.26-1.635-.166-1.895-.952C15.316 5.365 12.873 3.5 10 3.5c-2.08 0-3.935.978-5.125 2.5H6c.828 0 1.5.672 1.5 1.5S6.828 9 6 9H2C1.172 9 .5 8.328.5 7.5v-4C.5 2.672 1.172 2 2 2c.697 0 1.282.476 1.45 1.121C5.154 1.498 7.46.5 10.001.5z"
        fill={color}
      />
    </svg>
  );
};

RotateBoldFilled20.category = 'Arrows';

export default RotateBoldFilled20;
