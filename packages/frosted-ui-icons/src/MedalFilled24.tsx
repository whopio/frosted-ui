import * as React from 'react';
import { IconProps } from './types';

export const MedalFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MedalFilled24"
      {...props}
    >
      <path
        d="M5.804 17.348C7.508 18.695 9.659 19.5 12 19.5c2.338 0 4.487-.805 6.19-2.15l1.18 4.525c.173.668-.454 1.269-1.114 1.067l-6.26-1.91-6.259 1.91c-.66.202-1.287-.399-1.113-1.067l1.18-4.528zM12 1c4.694 0 8.5 3.806 8.5 8.5s-3.806 8.5-8.5 8.5-8.5-3.806-8.5-8.5 3.806-8.5 8.5-8.5zm3.636 6.118c-.293-.292-.768-.292-1.06 0l-3.817 3.816-1.333-1.332c-.293-.293-.768-.293-1.06 0-.294.292-.293.768 0 1.061l1.863 1.862c.292.293.767.293 1.06 0l4.347-4.346c.292-.293.292-.768 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

MedalFilled24.category = 'Interface General';

export default MedalFilled24;
