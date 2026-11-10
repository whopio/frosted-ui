import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRight16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleRight16"
      {...props}
    >
      <path
        d="M5.878 14.999C3.185 14.999 1 12.816 1 10.123c0-2.693 2.184-4.877 4.877-4.877h6.557L9.473 2.28c-.293-.293-.293-.768 0-1.06.293-.293.767-.293 1.06 0l4.25 4.251c.293.293.293.768 0 1.061l-4.25 4.252c-.293.293-.767.293-1.06 0-.293-.293-.293-.768 0-1.06l2.975-2.978h-6.57c-1.864 0-3.376 1.512-3.376 3.377 0 1.864 1.512 3.376 3.377 3.376h1.371c.414 0 .75.336.75.75s-.336.75-.75.75H5.878z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleRight16.category = 'Arrows';

export default RoundedArrowAngleRight16;
