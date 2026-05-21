import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.56332 3.4303C7.0774 2.94 7.08087 2.1487 7.57113 1.66272C8.06142 1.17706 8.8528 1.18042 9.33871 1.67053L14.8338 7.2135C15.4605 7.84596 15.4553 8.86681 14.8231 9.49377L9.33089 14.9381C8.84059 15.4241 8.0493 15.4206 7.56332 14.9303C7.0774 14.44 7.08088 13.6487 7.57113 13.1627L12.4325 8.34338L7.56332 3.4303ZM1.06722 3.43323C0.579141 2.9451 0.579169 2.1538 1.06722 1.66565C1.55539 1.1778 2.34674 1.17763 2.8348 1.66565L8.32992 7.16076C8.9595 7.79047 8.95937 8.81129 8.32992 9.44104L2.8348 14.9342C2.34661 15.4222 1.55531 15.4223 1.06722 14.9342C0.579246 14.446 0.57915 13.6547 1.06722 13.1666L5.93441 8.30139L1.06722 3.43323Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightFilled16.category = 'Arrows';

export default DoubleChevronRightFilled16;
