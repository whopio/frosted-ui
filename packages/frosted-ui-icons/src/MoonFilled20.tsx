import * as React from 'react';
import { IconProps } from './types';

export const MoonFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 0.5C10.1613 0.5 10.2498 0.687267 10.1598 0.821056C9.46333 1.85631 9.05667 3.10278 9.05664 4.44434C9.05664 8.03419 11.9668 10.9443 15.5566 10.9443C16.8979 10.9443 18.143 10.5366 19.1779 9.84018C19.3117 9.75014 19.5 9.83872 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5Z"
        fill={color}
      />
    </svg>
  );
};

MoonFilled20.category = 'Nature & Weather';

export default MoonFilled20;
