import * as React from 'react';
import { IconProps } from './types';

export const MicrophoneBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MicrophoneBold32"
      {...props}
    >
      <path
        d="M28 13.75c.552 0 1 .448 1 1 0 6.686-5.047 12.192-11.538 12.919-.26.029-.462.245-.462.506v.325c0 .276.224.5.5.5H21c.552 0 1 .448 1 1s-.448 1-1 1H11c-.552 0-1-.448-1-1s.448-1 1-1h3.5c.276 0 .5-.224.5-.5v-.325c0-.261-.202-.477-.462-.506C8.047 26.942 3 21.436 3 14.75c0-.552.448-1 1-1s1 .448 1 1c0 6.075 4.925 11 11 11s11-4.925 11-11c0-.552.448-1 1-1zM16.001 1c4.418 0 8 3.582 8 8v5.75c0 4.418-3.582 8-8 8s-8-3.582-8-8V9c0-4.418 3.582-8 8-8zm0 2c-3.314 0-6 2.686-6 6v5.75c0 3.314 2.686 6 6 6 3.313 0 6-2.686 6-6V9c0-3.314-2.687-6-6-6z"
        fill={color}
      />
    </svg>
  );
};

MicrophoneBold32.category = 'Sound & Music';

export default MicrophoneBold32;
