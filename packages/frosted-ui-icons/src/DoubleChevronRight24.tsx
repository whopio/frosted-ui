import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRight24"
      {...props}
    >
      <path
        d="M9.712 2.276c-.293-.292-.292-.767 0-1.06.293-.293.768-.294 1.06-.001l9.833 9.829c.527.527.527 1.381 0 1.908l-9.832 9.83c-.293.292-.768.292-1.06 0-.293-.294-.294-.768 0-1.061l9.724-9.722-9.725-9.723zm-6.497 0c-.293-.293-.293-.767 0-1.06.293-.293.768-.294 1.06-.001l9.833 9.829c.527.527.527 1.381 0 1.908l-9.832 9.83c-.293.292-.768.292-1.06 0-.294-.294-.294-.768 0-1.061l9.724-9.722-9.725-9.723z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRight24.category = 'Arrows';

export default DoubleChevronRight24;
