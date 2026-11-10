import * as React from 'react';
import { IconProps } from './types';

export const MicrophoneNoBaseBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MicrophoneNoBaseBold24"
      {...props}
    >
      <path
        d="M21 10.25c.552 0 1 .448 1 1 0 5.07-3.772 9.256-8.662 9.91-.191.025-.338.186-.338.379V23c0 .552-.448 1-1 1s-1-.448-1-1v-1.461c0-.193-.147-.354-.338-.38C5.772 20.507 2 16.32 2 11.25c0-.552.448-1 1-1s1 .448 1 1c0 4.418 3.582 8 8 8s8-3.582 8-8c0-.552.448-1 1-1zM12.001 0c3.314 0 6 2.686 6 6v5.25c0 3.313-2.687 6-6 6-3.314 0-6-2.686-6-6V6c0-3.314 2.686-6 6-6zm0 2c-2.21 0-4 1.79-4 4v5.25c0 2.21 1.79 4 4 4 2.209 0 4-1.791 4-4V6c0-2.209-1.791-4-4-4z"
        fill={color}
      />
    </svg>
  );
};

MicrophoneNoBaseBold24.category = 'Sound & Music';

export default MicrophoneNoBaseBold24;
