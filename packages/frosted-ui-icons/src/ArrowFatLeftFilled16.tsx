import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatLeftFilled16"
      {...props}
    >
      <path
        d="M9 11.5v1.746c0 .938-1.106 1.44-1.812.821L1.493 9.078c-.652-.571-.652-1.585 0-2.156l5.695-4.99C7.894 1.315 9 1.817 9 2.755V4.5h4.396c.886 0 1.604.718 1.604 1.604v3.791c0 .887-.718 1.605-1.604 1.605H9z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatLeftFilled16.category = 'Arrows';

export default ArrowFatLeftFilled16;
