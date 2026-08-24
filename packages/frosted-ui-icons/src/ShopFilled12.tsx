import * as React from 'react';
import { IconProps } from './types';

export const ShopFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShopFilled12"
      {...props}
    >
      <path
        d="M9.128 0c.88 0 1.674.526 2.02 1.335l.553 1.299c.337.792.218 1.628-.2 2.268V9.25c0 1.518-1.232 2.75-2.75 2.75h-5.5C1.732 12 .5 10.769.5 9.25V4.903C.08 4.263-.04 3.427.299 2.633l.553-1.298C1.197.525 1.992 0 2.872 0h6.256zM5.75 7c-.69 0-1.25.56-1.25 1.25v2.25h3V8.25C7.5 7.56 6.94 7 6.25 7h-.5zM2.87 1.5c-.278 0-.53.167-.639.423L1.68 3.22c-.258.606.187 1.279.845 1.279.464 0 .856-.347.912-.808L3.703 1.5h-.831zm2.12 1.863C4.919 3.968 5.39 4.5 6 4.5c.609 0 1.08-.532 1.008-1.137L6.784 1.5H5.215l-.224 1.863zm3.572.33c.056.46.448.807.912.807.659 0 1.103-.672.845-1.278l-.553-1.3c-.109-.255-.36-.422-.64-.422h-.83l.266 2.192z"
        fill={color}
      />
    </svg>
  );
};

ShopFilled12.category = 'Buildings';

export default ShopFilled12;
