import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeft20"
      {...props}
    >
      <path
        d="M11.334 2.282c.293-.293.293-.768 0-1.061-.293-.293-.768-.293-1.06-.001L2.362 9.132c-.48.48-.48 1.258 0 1.738l7.912 7.912c.293.292.767.292 1.06 0 .293-.293.293-.768 0-1.061l-7.72-7.72 7.72-7.72zm6.445 0c.293-.293.293-.768 0-1.061-.292-.293-.767-.293-1.06-.001L8.807 9.132c-.48.48-.48 1.258 0 1.738l7.912 7.912c.293.292.768.292 1.06 0 .293-.293.293-.768 0-1.061l-7.72-7.72 7.72-7.72z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeft20.category = 'Arrows';

export default DoubleChevronLeft20;
