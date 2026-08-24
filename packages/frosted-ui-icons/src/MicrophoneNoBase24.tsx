import * as React from 'react';
import { IconProps } from './types';

export const MicrophoneNoBase24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MicrophoneNoBase24"
      {...props}
    >
      <path
        d="M21.001 10.75c.414 0 .75.336.75.75 0 5.014-3.785 9.14-8.654 9.685-.194.022-.346.184-.346.38v1.685c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.685c0-.196-.152-.358-.346-.38C6.036 20.64 2.25 16.514 2.25 11.5c0-.414.337-.75.751-.75s.75.336.75.75c0 4.556 3.694 8.25 8.25 8.25s8.25-3.694 8.25-8.25c0-.414.336-.75.75-.75zm-9-10.75c3.314 0 6 2.686 6 6v5.5c0 3.313-2.687 6-6 6-3.21 0-5.832-2.521-5.992-5.691L6 11.5V6c0-3.314 2.686-6 6-6zm0 1.5c-2.485 0-4.5 2.015-4.5 4.5v5.5c0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5V6c0-2.485-2.015-4.5-4.5-4.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MicrophoneNoBase24.category = 'Sound & Music';

export default MicrophoneNoBase24;
