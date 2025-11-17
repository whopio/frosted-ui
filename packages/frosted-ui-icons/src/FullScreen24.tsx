import * as React from 'react';
import { IconProps } from './types';

export const FullScreen24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.2 21.5H7C4.51472 21.5 2.5 19.4853 2.5 17V15.4603M15.8 21.5H17C19.4853 21.5 21.5 19.4853 21.5 17V15.4603M15.8 2.5H17C19.4853 2.5 21.5 4.51472 21.5 7V8.41391M8.2 2.5H7C4.51472 2.5 2.5 4.51472 2.5 7V8.41391"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default FullScreen24;
