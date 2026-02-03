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
        d="M9.9502 1C11.082 1.00034 11.9999 1.91792 12 3.0498V6.0791C12.0001 6.22299 12.0383 6.36473 12.1104 6.48926L13.5195 8.92285C14.3104 10.2894 13.324 11.9997 11.7451 12H8.75V14.25C8.75 14.6641 8.414 14.9997 8 15C7.58579 15 7.25 14.6642 7.25 14.25V12H4.25488C2.67572 12 1.68931 10.2895 2.48047 8.92285L3.88965 6.48926C3.96167 6.36477 3.99993 6.22292 4 6.0791V3.0498C4.00011 1.91778 4.91778 1.00011 6.0498 1H9.9502Z"
        fill={color}
      />
    </svg>
  );
};

export default PinFilled16;
