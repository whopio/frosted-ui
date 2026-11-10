import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleRightBold32"
      {...props}
    >
      <path
        d="M11.5 31C5.703 31 1 26.299 1 20.5 1 14.7 5.702 10 11.5 10h16.113l-7.26-7.295c-.39-.392-.388-1.025.003-1.414.391-.39 1.024-.387 1.414.004l8.939 8.982c.388.39.388 1.02 0 1.41L21.77 20.67c-.39.391-1.023.393-1.414.004-.391-.39-.393-1.024-.004-1.415l7.224-7.26H11.5C6.806 12 3 15.806 3 20.5c0 4.695 3.806 8.5 8.5 8.5h3.915c.553 0 1 .449 1 1 0 .553-.447 1-1 1h-3.914z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleRightBold32.category = 'Arrows';

export default RoundedArrowAngleRightBold32;
