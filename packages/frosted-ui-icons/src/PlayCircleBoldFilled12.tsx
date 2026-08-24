import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayCircleBoldFilled12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm-.43 3.192c-.71-.34-1.57.171-1.57.995v3.626c0 .879.979 1.403 1.71.916l2.72-1.814c.653-.435.653-1.395 0-1.83L5.71 3.271l-.14-.079z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleBoldFilled12.category = 'Sound & Music';

export default PlayCircleBoldFilled12;
