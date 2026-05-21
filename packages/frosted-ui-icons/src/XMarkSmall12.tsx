import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.71955 3.2194C8.01239 2.92689 8.48729 2.92684 8.7801 3.2194C9.07278 3.5122 9.07265 3.98706 8.7801 4.27994L7.0594 5.99967L8.7801 7.72037C9.07261 8.01328 9.07281 8.48814 8.7801 8.78092C8.48731 9.07345 8.01239 9.07337 7.71955 8.78092L5.99885 7.06119L4.2801 8.77994C3.98724 9.0728 3.51245 9.07273 3.21955 8.77994C2.92689 8.48703 2.92674 8.01221 3.21955 7.7194L4.9383 5.99967L3.21955 4.28092C2.92674 3.98811 2.9269 3.51329 3.21955 3.22037C3.51245 2.92754 3.98723 2.9275 4.2801 3.22037L5.99885 4.93912L7.71955 3.2194Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmall12.category = 'Interface General';

export default XMarkSmall12;
