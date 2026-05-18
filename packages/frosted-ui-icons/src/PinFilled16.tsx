import * as React from 'react';
import { IconProps } from './types';

export const PinFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.95074 1C11.0826 1.00034 12.0004 1.91792 12.0005 3.0498V6.0791C12.0006 6.22299 12.0388 6.36473 12.1109 6.48926L13.5201 8.92285C14.311 10.2894 13.3245 11.9997 11.7457 12H8.75055V14.25C8.75055 14.6641 8.41455 14.9997 8.00055 15C7.58633 15 7.25055 14.6642 7.25055 14.25V12H4.25543C2.67627 12 1.68986 10.2895 2.48102 8.92285L3.8902 6.48926C3.96222 6.36477 4.00047 6.22292 4.00055 6.0791V3.0498C4.00065 1.91778 4.91832 1.00011 6.05035 1H9.95074Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PinFilled16.category = 'Interface General';

export default PinFilled16;
