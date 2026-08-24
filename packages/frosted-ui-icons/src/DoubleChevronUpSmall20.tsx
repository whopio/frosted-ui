import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmall20"
      {...props}
    >
      <path
        d="M13.636 10.277c.293.293.768.293 1.06 0 .293-.293.293-.768 0-1.06l-3.87-3.875c-.456-.455-1.196-.455-1.652 0L5.303 9.216c-.293.293-.293.768 0 1.061.293.293.768.293 1.06 0L10 6.639l3.637 3.638zm0 4.503c.293.293.768.293 1.06 0 .293-.293.293-.768 0-1.06l-3.87-3.875c-.456-.456-1.196-.456-1.652 0L5.303 13.72c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L10 11.143l3.637 3.638z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmall20.category = 'Arrows';

export default DoubleChevronUpSmall20;
