import * as React from 'react';
import { IconProps } from './types';

export const MicrophoneFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MicrophoneFilled20"
      {...props}
    >
      <path
        d="M17.5 8c.414 0 .75.336.75.75 0 4.206-3.148 7.674-7.216 8.183-.16.02-.284.155-.284.317v.938c0 .172.14.312.313.312h2.187c.414 0 .75.336.75.75s-.336.75-.75.75h-6.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.188c.172 0 .312-.14.312-.313v-.938c0-.161-.124-.296-.284-.316-4.068-.509-7.216-3.977-7.216-8.183 0-.414.336-.75.75-.75s.75.336.75.75c0 3.728 3.022 6.75 6.75 6.75s6.75-3.022 6.75-6.75c0-.414.336-.75.75-.75zM10 0c2.761 0 5 2.239 5 5v3.75c0 2.761-2.239 5-5 5s-5-2.239-5-5V5c0-2.761 2.239-5 5-5z"
        fill={color}
      />
    </svg>
  );
};

MicrophoneFilled20.category = 'Sound & Music';

export default MicrophoneFilled20;
