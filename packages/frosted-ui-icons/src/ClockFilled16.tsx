import * as React from 'react';
import { IconProps } from './types';

export const ClockFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM7.75 3.75C7.33583 3.75 7.00007 4.08585 7 4.5V8.5C7.00003 8.71414 7.09182 8.91638 7.24902 9.05762L7.32031 9.11426L9.57031 10.6895C9.9096 10.9267 10.3768 10.8441 10.6143 10.5049C10.8516 10.1656 10.7689 9.69844 10.4297 9.46094L8.5 8.11035V4.5C8.49993 4.08585 8.16417 3.75 7.75 3.75Z"
        fill={color}
      />
    </svg>
  );
};

ClockFilled16.category = 'Interface General';

export default ClockFilled16;
