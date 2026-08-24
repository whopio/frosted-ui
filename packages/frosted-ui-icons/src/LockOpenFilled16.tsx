import * as React from 'react';
import { IconProps } from './types';

export const LockOpenFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LockOpenFilled16"
      {...props}
    >
      <path
        d="M8 1c1.542 0 2.902.777 3.713 1.96.323.471-.07 1.04-.642 1.04-.295 0-.56-.164-.747-.393C9.774 2.932 8.94 2.5 8 2.5c-1.657 0-3 1.343-3 3v1h6.55c1.629 0 2.95 1.321 2.95 2.95v2.6c0 1.629-1.321 2.95-2.95 2.95h-7.1c-1.629 0-2.95-1.321-2.95-2.95v-2.6c0-1.296.837-2.395 2-2.79V5.5C3.5 3.015 5.515 1 8 1z"
        fill={color}
      />
    </svg>
  );
};

LockOpenFilled16.category = 'Security';

export default LockOpenFilled16;
