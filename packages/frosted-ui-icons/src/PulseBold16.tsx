import * as React from 'react';
import { IconProps } from './types';

export const PulseBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseBold16"
      {...props}
    >
      <path
        d="M14.26 3.827c.371-.409 1.004-.439 1.413-.068.409.372.439 1.005.067 1.414l-5.511 6.062c-.513.564-1.399.564-1.912 0l-2.863-3.15-3.714 4.088c-.371.408-1.004.438-1.413.067-.408-.372-.439-1.005-.067-1.413L4.5 6.165l.099-.1c.486-.431 1.224-.43 1.71 0l.101.1 2.863 3.147 4.987-5.485z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PulseBold16.category = 'Stats & Charts';

export default PulseBold16;
