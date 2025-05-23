import * as React from 'react';
import { IconProps } from './types';

export const Upload16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.40002 9.75009L1.40002 12.2314C1.40002 13.3669 2.32053 14.2874 3.45602 14.2874L12.544 14.2874C13.6795 14.2874 14.6 13.3669 14.6 12.2314L14.6 9.75009M8.00002 10.1747L8.00002 1.77474M8.00002 1.77474L4.40002 5.57474M8.00002 1.77474L11.6 5.57474"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Upload16;
