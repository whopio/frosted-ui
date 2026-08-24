import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatDownFilled20"
      {...props}
    >
      <path
        d="M14.5 9h2.528c1.045 0 1.598 1.236.901 2.015l-6.686 7.471c-.663.74-1.823.74-2.486 0l-6.685-7.471C1.375 10.236 1.927 9 2.972 9H5.5V2.897C5.5 1.85 6.35 1 7.398 1h5.205c1.048 0 1.897.85 1.897 1.897V9z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatDownFilled20.category = 'Arrows';

export default ArrowFatDownFilled20;
