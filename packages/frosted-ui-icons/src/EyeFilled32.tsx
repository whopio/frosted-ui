import * as React from 'react';
import { IconProps } from './types';

export const EyeFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="EyeFilled32"
      {...props}
    >
      <path
        d="M16 5c4.862 0 8.522 2.532 10.974 5.08 2.451 2.55 3.76 5.181 3.941 5.556.112.232.111.495 0 .727-.181.378-1.491 3.01-3.941 5.557C24.523 24.47 20.862 27 16 27c-4.861 0-8.522-2.53-10.973-5.08-2.45-2.547-3.76-5.178-3.942-5.556-.111-.232-.111-.496 0-.728.181-.376 1.49-3.007 3.942-5.555C7.478 7.53 11.138 5 16 5zm0 5c-3.313 0-6 2.687-6 6 0 3.314 2.687 6 6 6 3.314 0 6-2.686 6-6 0-3.313-2.686-6-6-6zm0 1.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5z"
        fill={color}
      />
    </svg>
  );
};

EyeFilled32.category = 'Accessibility';

export default EyeFilled32;
