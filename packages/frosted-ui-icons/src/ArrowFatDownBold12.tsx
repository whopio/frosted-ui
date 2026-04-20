import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4 5.8V1.75C4 1.33579 4.33579 1 4.75 1H7.25C7.66421 1 8 1.33579 8 1.75V5.8C8 5.91046 8.08954 6 8.2 6H10.3C10.5638 6 10.6991 6.3159 10.5172 6.5069L6.43445 10.7938C6.198 11.0421 5.80194 11.0421 5.56549 10.7938L1.48275 6.5069C1.30085 6.3159 1.43624 6 1.7 6H3.8C3.91046 6 4 5.91046 4 5.8Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatDownBold12.category = 'Arrows';

export default ArrowFatDownBold12;
