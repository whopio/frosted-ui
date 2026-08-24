import * as React from 'react';
import { IconProps } from './types';

export const MicrophoneNoBase20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MicrophoneNoBase20"
      {...props}
    >
      <path
        d="M17.5 9c.414 0 .75.336.75.75 0 4.206-3.148 7.674-7.216 8.183-.16.02-.284.155-.284.317v1c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1c0-.162-.124-.297-.284-.317-4.068-.509-7.216-3.977-7.216-8.183 0-.414.336-.75.75-.75s.75.336.75.75c0 3.728 3.022 6.75 6.75 6.75s6.75-3.022 6.75-6.75c0-.414.336-.75.75-.75zM10 0c2.761 0 5 2.239 5 5v4.75l-.007.257C14.86 12.649 12.675 14.75 10 14.75c-2.675 0-4.86-2.101-4.993-4.743L5 9.75V5c0-2.761 2.239-5 5-5zm0 1.5C8.067 1.5 6.5 3.067 6.5 5v4.75c0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5V5c0-1.933-1.567-3.5-3.5-3.5z"
        fill={color}
      />
    </svg>
  );
};

MicrophoneNoBase20.category = 'Sound & Music';

export default MicrophoneNoBase20;
