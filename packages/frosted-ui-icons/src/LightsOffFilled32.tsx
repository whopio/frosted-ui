import * as React from 'react';
import { IconProps } from './types';

export const LightsOffFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LightsOffFilled32"
      {...props}
    >
      <path
        d="M19.2 30.5c.414 0 .75.336.75.75s-.336.75-.75.75h-6.4c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.4zM16 6.75c2.934 0 5.267 1.028 6.861 2.738 1.587 1.702 2.389 4.02 2.389 6.512 0 3.467-2.234 5.737-3.636 6.824-.54.419-.864.999-.864 1.567 0 1.993-1.616 3.609-3.61 3.609h-2.28c-1.994 0-3.61-1.616-3.61-3.61 0-.567-.325-1.147-.864-1.566C8.984 21.737 6.75 19.467 6.75 16c0-2.492.802-4.81 2.389-6.512C10.733 7.778 13.066 6.75 16 6.75z"
        fill={color}
      />
    </svg>
  );
};

LightsOffFilled32.category = 'Objects';

export default LightsOffFilled32;
