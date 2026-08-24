import * as React from 'react';
import { IconProps } from './types';

export const ShareNodesBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShareNodesBoldFilled32"
      {...props}
    >
      <path
        d="M24.75 1C28.202 1 31 3.799 31 7.25c0 3.452-2.798 6.25-6.25 6.25-2.032 0-3.836-.97-4.977-2.472l-6.514 3.257c.155.545.241 1.12.241 1.715 0 .593-.085 1.166-.24 1.71l6.514 3.257c1.142-1.499 2.946-2.466 4.976-2.466 3.452 0 6.25 2.798 6.25 6.25 0 3.451-2.798 6.25-6.25 6.25s-6.25-2.799-6.25-6.25c0-.35.03-.692.085-1.025l-6.82-3.41c-1.137 1.191-2.738 1.934-4.515 1.934C3.798 22.25 1 19.453 1 16c0-3.451 2.798-6.25 6.25-6.25 1.774 0 3.374.742 4.512 1.93l6.822-3.412c-.054-.331-.084-.67-.084-1.018C18.5 3.8 21.298 1 24.75 1z"
        fill={color}
      />
    </svg>
  );
};

ShareNodesBoldFilled32.category = 'Interface General';

export default ShareNodesBoldFilled32;
