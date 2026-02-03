import * as React from 'react';
import { IconProps } from './types';

export const SlidersInASquareFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.75 0C13.6495 5.88736e-08 16 2.35051 16 5.25V10.75C16 13.6495 13.6495 16 10.75 16H5.25C2.35051 16 0 13.6495 0 10.75V5.25C1.33299e-08 2.35051 2.35051 0 5.25 0H10.75ZM6 8.25C5.58579 8.25 5.25 8.58579 5.25 9V10H4.25C3.83579 10 3.5 10.3358 3.5 10.75C3.5 11.1642 3.83579 11.5 4.25 11.5H5.25V12.5C5.25 12.9142 5.58579 13.25 6 13.25C6.41421 13.25 6.75 12.9142 6.75 12.5V11.5H11.75C12.1642 11.5 12.5 11.1642 12.5 10.75C12.5 10.3358 12.1642 10 11.75 10H6.75V9C6.75 8.58579 6.41421 8.25 6 8.25ZM10 2.75C9.58579 2.75 9.25 3.08579 9.25 3.5V4.5H4.25C3.83579 4.5 3.5 4.83579 3.5 5.25C3.5 5.66421 3.83579 6 4.25 6H9.25V7C9.25 7.41421 9.58579 7.75 10 7.75C10.4142 7.75 10.75 7.41421 10.75 7V6H11.75C12.1642 6 12.5 5.66421 12.5 5.25C12.5 4.83579 12.1642 4.5 11.75 4.5H10.75V3.5C10.75 3.08579 10.4142 2.75 10 2.75Z"
        fill={color}
      />
    </svg>
  );
};

SlidersInASquareFilled16.category = 'Interface General';

export default SlidersInASquareFilled16;
