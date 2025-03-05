import * as React from 'react';
import { IconProps } from './types';

export const GridAdd16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.25 12H9.75M12 14.25V9.75M3.08 6.25H4.92C5.65454 6.25 6.25 5.65454 6.25 4.92V3.08C6.25 2.34546 5.65454 1.75 4.92 1.75H3.08C2.34546 1.75 1.75 2.34546 1.75 3.08V4.92C1.75 5.65454 2.34546 6.25 3.08 6.25ZM3.08 14.25H4.92C5.65454 14.25 6.25 13.6545 6.25 12.92V11.08C6.25 10.3455 5.65454 9.75 4.92 9.75H3.08C2.34546 9.75 1.75 10.3455 1.75 11.08V12.92C1.75 13.6545 2.34546 14.25 3.08 14.25ZM11.08 6.25H12.92C13.6545 6.25 14.25 5.65454 14.25 4.92V3.08C14.25 2.34546 13.6545 1.75 12.92 1.75H11.08C10.3455 1.75 9.75 2.34546 9.75 3.08V4.92C9.75 5.65454 10.3455 6.25 11.08 6.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GridAdd16;
