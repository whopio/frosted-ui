import * as React from 'react';
import { IconProps } from './types';

export const MessageFilledNotification32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageFilledNotification32"
      {...props}
    >
      <path
        d="M16 1c1.996 0 3.9.39 5.643 1.099-.567.915-.893 1.995-.893 3.151 0 3.314 2.686 6 6 6 1.155 0 2.234-.328 3.15-.894C30.607 12.1 31 14.004 31 16c0 8.284-6.716 15-15 15-1.401 0-2.76-.193-4.047-.554-1.835-.514-3.613-.818-5.242-.33-.81.241-1.576.49-2.273.728-1.003.342-1.992-.026-2.625-.659-.631-.632-1-1.621-.657-2.624.238-.697.486-1.463.728-2.273.486-1.63.182-3.407-.331-5.242C1.193 18.758 1 17.4 1 16 1 7.716 7.716 1 16 1zM9.501 14.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm6.5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm6.5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zM26.75 1C29.097 1 31 2.903 31 5.25S29.097 9.5 26.75 9.5 22.5 7.597 22.5 5.25 24.403 1 26.75 1z"
        fill={color}
      />
    </svg>
  );
};

MessageFilledNotification32.category = 'Communication';

export default MessageFilledNotification32;
