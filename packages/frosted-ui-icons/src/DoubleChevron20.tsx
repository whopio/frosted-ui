import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevron20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevron20"
      {...props}
    >
      <path
        d="M15.47 12.72c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06l-6 6c-.293.293-.767.293-1.06 0l-6-6c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0L10 18.19l5.47-5.47zM10 0c.199 0 .39.08.53.22l6 6c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L10 1.81 4.53 7.28c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l6-6C9.61.08 9.8 0 10 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevron20.category = 'Arrows';

export default DoubleChevron20;
