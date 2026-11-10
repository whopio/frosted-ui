import * as React from 'react';
import { IconProps } from './types';

export const MicrophoneBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MicrophoneBold12"
      {...props}
    >
      <path
        d="M10.75 3.6c.552 0 1 .448 1 1 0 2.37-1.46 4.398-3.528 5.237-.078.031-.056.163.028.163.552 0 1 .448 1 1s-.448 1-1 1h-4.5c-.552 0-1-.448-1-1s.448-1 1-1c.084 0 .106-.132.028-.163C1.71 8.997.25 6.969.25 4.6c0-.552.448-1 1-1s1 .448 1 1c0 2.015 1.635 3.65 3.65 3.65h.2c2.015 0 3.65-1.635 3.65-3.65 0-.552.448-1 1-1zM6 0c1.657 0 3 1.343 3 3v1.5c0 1.657-1.343 3-3 3s-3-1.343-3-3V3c0-1.657 1.343-3 3-3zm0 2c-.552 0-1 .448-1 1v1.5c0 .552.448 1 1 1s1-.448 1-1V3c0-.552-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

MicrophoneBold12.category = 'Sound & Music';

export default MicrophoneBold12;
