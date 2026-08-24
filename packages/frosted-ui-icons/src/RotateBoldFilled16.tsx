import * as React from 'react';
import { IconProps } from './types';

export const RotateBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateBoldFilled16"
      {...props}
    >
      <path
        d="M14 9c.828 0 1.5.672 1.5 1.5v3c0 .828-.672 1.5-1.5 1.5-.673 0-1.242-.443-1.433-1.053C11.303 14.92 9.72 15.5 8 15.5c-3.03 0-5.636-1.796-6.82-4.374-.345-.753-.015-1.644.738-1.99.753-.345 1.644-.015 1.99.738C4.62 11.427 6.185 12.5 8 12.5c.856 0 1.654-.242 2.336-.657-.495-.245-.836-.753-.836-1.343 0-.828.672-1.5 1.5-1.5h3zM8 .5c3.03 0 5.636 1.796 6.82 4.374.345.753.015 1.644-.738 1.99-.753.345-1.644.015-1.99-.738C11.38 4.574 9.815 3.5 8 3.5c-.856 0-1.655.24-2.337.656.495.245.837.754.837 1.344C6.5 6.328 5.828 7 5 7H2C1.172 7 .5 6.328.5 5.5v-3C.5 1.672 1.172 1 2 1c.672 0 1.241.442 1.432 1.052C4.696 1.079 6.28.5 8 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateBoldFilled16.category = 'Arrows';

export default RotateBoldFilled16;
