import * as React from 'react';
import { IconProps } from './types';

export const LockBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 1C10.7614 1 13 3.23858 13 6V6.74219C13.9001 7.30855 14.5 8.30826 14.5 9.4502V11.7998C14.5 13.5671 13.0671 15 11.2998 15H4.7002C2.93288 15 1.5 13.5671 1.5 11.7998V9.4502C1.5 8.30826 2.09987 7.30855 3 6.74219V6C3 3.23858 5.23858 1 8 1ZM4.7002 8.25C4.03745 8.25 3.5 8.78745 3.5 9.4502V11.7998C3.5 12.4625 4.03745 13 4.7002 13H11.2998C11.9625 13 12.5 12.4625 12.5 11.7998V9.4502C12.5 8.78745 11.9625 8.25 11.2998 8.25H4.7002ZM8 3C6.34315 3 5 4.34315 5 6V6.25H11V6C11 4.34315 9.65685 3 8 3Z"
        fill={color}
      />
    </svg>
  );
};

LockBold16.category = 'Security';

export default LockBold16;
