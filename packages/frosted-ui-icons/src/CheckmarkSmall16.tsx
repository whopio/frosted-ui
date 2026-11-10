import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmall16"
      {...props}
    >
      <path
        d="M11.97 4.72c.292-.293.767-.293 1.06 0 .293.292.293.767 0 1.06l-6 6c-.293.293-.768.293-1.061 0l-3-3c-.292-.293-.292-.768 0-1.06.294-.293.768-.293 1.061 0l2.47 2.47 5.47-5.47z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkSmall16.category = 'Checkmarks';

export default CheckmarkSmall16;
