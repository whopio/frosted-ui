import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftSmall20"
      {...props}
    >
      <path
        d="M10.276 6.364c.293-.293.293-.768 0-1.061-.292-.293-.767-.293-1.06 0L5.342 9.174c-.456.456-.456 1.196 0 1.651l3.874 3.872c.293.292.768.292 1.06 0 .293-.293.293-.768 0-1.061L6.64 10l3.637-3.636zm4.503 0c.293-.293.293-.768 0-1.061-.293-.293-.767-.293-1.06 0L9.845 9.174c-.456.456-.456 1.196 0 1.651l3.874 3.872c.293.292.768.292 1.06 0 .293-.293.293-.768 0-1.061L11.142 10l3.637-3.636z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeftSmall20.category = 'Arrows';

export default DoubleChevronLeftSmall20;
