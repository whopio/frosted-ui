import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftSmall12"
      {...props}
    >
      <path
        d="M5.778 3.928c.293-.293.293-.768 0-1.06-.292-.293-.767-.293-1.06 0L2.295 5.29c-.39.39-.39 1.024 0 1.414l2.423 2.423c.293.293.768.293 1.06 0 .293-.293.293-.767 0-1.06L3.71 5.998l2.07-2.07zm4 0c.293-.293.293-.768 0-1.06-.292-.293-.767-.293-1.06 0L6.295 5.29c-.39.39-.39 1.024 0 1.414l2.423 2.423c.293.293.768.293 1.06 0 .293-.293.293-.767 0-1.06L7.71 5.998l2.07-2.07z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmall12.category = 'Arrows';

export default DoubleChevronLeftSmall12;
