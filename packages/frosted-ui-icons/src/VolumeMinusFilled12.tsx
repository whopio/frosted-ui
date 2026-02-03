import * as React from 'react';
import { IconProps } from './types';

export const VolumeMinusFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.16797 1.43469C5.05006 0.637974 6.49964 1.25439 6.5 2.47961V9.51965C6.49998 10.7849 4.95459 11.4006 4.08398 10.4825L2.67773 9.00012H1.5C0.671707 9.00012 0.000217716 8.32836 0 7.50012V4.50012C0.000135865 3.67181 0.671657 3.00012 1.5 3.00012H2.67676L4.08398 1.51672L4.16797 1.43469ZM11.25 5.25012C11.6642 5.25012 12 5.58591 12 6.00012C11.9999 6.41428 11.6642 6.75012 11.25 6.75012H8.75C8.33583 6.75012 8.00007 6.41428 8 6.00012C8 5.58591 8.33579 5.25012 8.75 5.25012H11.25Z"
        fill={color}
      />
    </svg>
  );
};

export default VolumeMinusFilled12;
