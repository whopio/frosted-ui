import * as React from 'react';
import { IconProps } from './types';

export const MicrophoneFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MicrophoneFilled16"
      {...props}
    >
      <path
        d="M14 6.25c.414 0 .75.336.75.75 0 3.398-2.51 6.207-5.778 6.679-.126.018-.222.124-.222.252v.319c0 .138.112.25.25.25h1.25c.414 0 .75.336.75.75s-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H7c.138 0 .25-.112.25-.25v-.32c0-.127-.096-.233-.222-.251C3.76 13.207 1.25 10.398 1.25 7c0-.414.336-.75.75-.75s.75.336.75.75c0 2.9 2.35 5.25 5.25 5.25S13.25 9.9 13.25 7c0-.414.336-.75.75-.75zM8 0c2.21 0 4 1.79 4 4v3c0 2.21-1.79 4-4 4S4 9.21 4 7V4c0-2.21 1.79-4 4-4z"
        fill={color}
      />
    </svg>
  );
};

MicrophoneFilled16.category = 'Sound & Music';

export default MicrophoneFilled16;
