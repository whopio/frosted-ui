import * as React from 'react';
import { IconProps } from './types';

export const MessageBlankFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessageBlankFilled20"
      {...props}
    >
      <path
        d="M10 1c4.97 0 9 4.03 9 9s-4.03 9-9 9c-1.298 0-2.532-.28-3.648-.775-.895.196-1.807.422-2.6.628-1.565.409-3.015-1.04-2.606-2.606.206-.793.43-1.705.627-2.6C1.278 12.532 1 11.298 1 10c0-4.97 4.03-9 9-9z"
        fill={color}
      />
    </svg>
  );
};

MessageBlankFilled20.category = 'Communication';

export default MessageBlankFilled20;
