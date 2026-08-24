import * as React from 'react';
import { IconProps } from './types';

export const ClipboardBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ClipboardBoldFilled12"
      {...props}
    >
      <path
        d="M7.499 0C8.326 0 9 .67 9 1.5v.074c.97.25 1.688 1.128 1.688 2.176v6c0 1.243-1.008 2.25-2.25 2.25H3.561c-1.242 0-2.25-1.007-2.25-2.25v-6c0-1.048.718-1.926 1.688-2.176V1.5C3 .67 3.674 0 4.501 0h2.998zM4.75 7.75c-.552 0-1 .448-1 1s.448 1 1 1h1.5c.552 0 1-.448 1-1s-.448-1-1-1h-1.5zm0-3.5c-.552 0-1 .448-1 1s.448 1 1 1h2.5c.552 0 1-.448 1-1s-.448-1-1-1h-2.5z"
        fill={color}
      />
    </svg>
  );
};

ClipboardBoldFilled12.category = 'Interface General';

export default ClipboardBoldFilled12;
