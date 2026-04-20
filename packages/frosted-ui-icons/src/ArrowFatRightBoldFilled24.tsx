import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.6176 7L3.43412 7C2.64208 7 2 7.64208 2 8.43412L2 15.5659C2 16.3579 2.64208 17 3.43412 17H11.6176C11.8288 17 12 17.1712 12 17.3824V20.6615C12 21.1658 12.6041 21.4247 12.9693 21.0769L21.6277 12.8308C22.1024 12.3786 22.1024 11.6213 21.6277 11.1692L12.9693 2.92311C12.604 2.57528 12 2.83416 12 3.33851V6.61757C12 6.82878 11.8288 7 11.6176 7Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatRightBoldFilled24.category = 'Arrows';

export default ArrowFatRightBoldFilled24;
