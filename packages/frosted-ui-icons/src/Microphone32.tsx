import * as React from 'react';
import { IconProps } from './types';

export const Microphone32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Microphone32"
      {...props}
    >
      <path
        d="M28 14.25c.414 0 .75.336.75.75 0 6.63-5.06 12.076-11.529 12.69-.264.026-.471.243-.471.508V29c0 .276.224.5.5.5H21c.414 0 .75.336.75.75s-.336.75-.75.75H11c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.75c.276 0 .5-.224.5-.5v-.802c0-.265-.207-.482-.471-.508C8.31 27.076 3.25 21.63 3.25 15c0-.414.336-.75.75-.75s.75.336.75.75c0 6.213 5.037 11.25 11.25 11.25S27.25 21.213 27.25 15c0-.414.336-.75.75-.75zM16.001 1c4.418 0 8 3.582 8 8v6l-.01.412C23.775 19.64 20.28 23 16 23s-7.775-3.361-7.99-7.588L8.002 15V9c0-4.418 3.582-8 8-8zm0 1.5c-3.59 0-6.5 2.91-6.5 6.5v6c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5V9c0-3.59-2.91-6.5-6.5-6.5z"
        fill={color}
      />
    </svg>
  );
};

Microphone32.category = 'Sound & Music';

export default Microphone32;
