import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalf32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalf32"
      {...props}
    >
      <path
        d="M14.7.252c.834-.336 1.766-.336 2.6 0l10.014 4.024c1.32.532 2.186 1.813 2.186 3.237V17.58c0 4.118-2.903 7.506-5.836 9.896-2.965 2.415-6.152 3.97-7.086 4.401-.37.171-.785.171-1.156 0-.934-.432-4.121-1.986-7.086-4.401C5.403 25.086 2.5 21.698 2.5 17.58V7.513c0-1.424.866-2.705 2.187-3.237L14.699.252zM5.245 5.668C4.493 5.971 4 6.701 4 7.513V17.58c0 3.406 2.43 6.407 5.284 8.733 2.242 1.826 4.633 3.14 5.966 3.81V1.646L5.246 5.668zM16.75 30.123c1.333-.67 3.724-1.984 5.966-3.81C25.57 23.986 28 20.986 28 17.58V7.513c0-.812-.493-1.542-1.246-1.845L16.75 1.646v28.477z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalf32.category = 'Security';

export default ShieldHalf32;
