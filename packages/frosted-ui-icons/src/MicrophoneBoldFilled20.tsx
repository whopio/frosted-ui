import * as React from 'react';
import { IconProps } from './types';

export const MicrophoneBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MicrophoneBoldFilled20"
      {...props}
    >
      <path
        d="M17.5 7.5c.552 0 1 .448 1 1 0 4.26-3.135 7.787-7.224 8.402-.157.024-.276.157-.276.316v.47c0 .172.14.312.313.312h1.937c.552 0 1 .448 1 1s-.448 1-1 1h-6.5c-.552 0-1-.448-1-1s.448-1 1-1h1.938c.172 0 .312-.14.312-.313v-.47c0-.158-.12-.29-.276-.314C4.635 16.287 1.5 12.76 1.5 8.5c0-.552.448-1 1-1s1 .448 1 1c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-.552.448-1 1-1zM10 0c2.761 0 5 2.239 5 5v3.5c0 2.761-2.239 5-5 5s-5-2.239-5-5V5c0-2.761 2.239-5 5-5z"
        fill={color}
      />
    </svg>
  );
};

MicrophoneBoldFilled20.category = 'Sound & Music';

export default MicrophoneBoldFilled20;
