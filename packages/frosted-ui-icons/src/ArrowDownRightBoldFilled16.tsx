import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.75 12.75L12.75 4.25001M12.75 12.75L4.25 12.75M12.75 12.75L3.25 3.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRightBoldFilled16.category = 'Arrows';

export default ArrowDownRightBoldFilled16;
