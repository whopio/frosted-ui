import * as React from 'react';
import { IconProps } from './types';

export const MicrophoneNoBaseFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MicrophoneNoBaseFilled16"
      {...props}
    >
      <path
        d="M14 6.75c.414 0 .75.336.75.75 0 3.398-2.51 6.207-5.778 6.679-.126.018-.222.124-.222.252v.819c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.82c0-.127-.096-.233-.222-.251C3.76 13.707 1.25 10.898 1.25 7.5c0-.414.336-.75.75-.75s.75.336.75.75c0 2.9 2.35 5.25 5.25 5.25s5.25-2.35 5.25-5.25c0-.414.336-.75.75-.75zM8 0c2.21 0 4 1.79 4 4v3.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V4c0-2.21 1.79-4 4-4z"
        fill={color}
      />
    </svg>
  );
};

MicrophoneNoBaseFilled16.category = 'Sound & Music';

export default MicrophoneNoBaseFilled16;
