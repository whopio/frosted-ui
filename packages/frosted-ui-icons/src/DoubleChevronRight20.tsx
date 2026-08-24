import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRight20"
      {...props}
    >
      <path
        d="M8.666 2.282c-.292-.293-.292-.768 0-1.061.293-.293.768-.293 1.06-.001l7.913 7.912c.48.48.48 1.258 0 1.738l-7.912 7.912c-.293.292-.768.292-1.06 0-.293-.293-.294-.768 0-1.061l7.719-7.72-7.72-7.72zm-6.445 0c-.293-.293-.293-.768 0-1.061.293-.293.768-.293 1.06-.001l7.913 7.912c.48.48.48 1.258 0 1.738l-7.912 7.912c-.293.292-.768.292-1.061 0-.293-.293-.293-.768 0-1.061l7.72-7.72-7.72-7.72z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRight20.category = 'Arrows';

export default DoubleChevronRight20;
