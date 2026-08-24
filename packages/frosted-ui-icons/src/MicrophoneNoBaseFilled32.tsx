import * as React from 'react';
import { IconProps } from './types';

export const MicrophoneNoBaseFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MicrophoneNoBaseFilled32"
      {...props}
    >
      <path
        d="M28 14.25c.414 0 .75.336.75.75 0 6.63-5.06 12.076-11.529 12.69-.264.026-.471.243-.471.508v2.052c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.052c0-.265-.207-.482-.471-.508C8.31 27.076 3.25 21.63 3.25 15c0-.414.336-.75.75-.75s.75.336.75.75c0 6.213 5.037 11.25 11.25 11.25S27.25 21.213 27.25 15c0-.414.336-.75.75-.75zM16.001 1c4.418 0 8 3.582 8 8v6c0 4.418-3.582 8-8 8s-8-3.582-8-8V9c0-4.418 3.582-8 8-8z"
        fill={color}
      />
    </svg>
  );
};

MicrophoneNoBaseFilled32.category = 'Sound & Music';

export default MicrophoneNoBaseFilled32;
