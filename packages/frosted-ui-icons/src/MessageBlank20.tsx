import * as React from 'react';
import { IconProps } from './types';

export const MessageBlank20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBlank20"
      {...props}
    >
      <path
        d="M17.5 10c0-4.142-3.358-7.5-7.5-7.5-4.142 0-7.5 3.358-7.5 7.5 0 1.161.264 2.259.733 3.238.074.153.095.327.059.493-.214.996-.467 2.02-.695 2.895-.12.457.32.895.776.776.875-.228 1.9-.481 2.896-.695l.126-.016c.084-.003.168.006.249.03l.118.045.373.167c.882.365 1.85.567 2.865.567 4.142 0 7.5-3.358 7.5-7.5zm1.5 0c0 4.97-4.03 9-9 9-1.298 0-2.532-.28-3.648-.775-.895.196-1.807.422-2.6.628-1.565.409-3.015-1.04-2.606-2.606.206-.793.43-1.705.627-2.6C1.278 12.532 1 11.298 1 10c0-4.97 4.03-9 9-9s9 4.03 9 9z"
        fill={color}
      />
    </svg>
  );
};

MessageBlank20.category = 'Communication';

export default MessageBlank20;
