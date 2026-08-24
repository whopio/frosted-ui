import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatRightBoldFilled12"
      {...props}
    >
      <path
        d="M5 9v1.3c0 1.143 1.369 1.73 2.196.941l4.287-4.083c.662-.63.662-1.686 0-2.316L7.196.759C6.37-.03 5 .557 5 1.7V3H1.75C.784 3 0 3.784 0 4.75v2.5C0 8.217.784 9 1.75 9H5z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatRightBoldFilled12.category = 'Arrows';

export default ArrowFatRightBoldFilled12;
