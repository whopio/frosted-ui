import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CompassFilled32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zm6.815 10.554c.43-1.132-.63-2.242-1.76-1.908l-.109.038-6.95 2.635c-1.003.38-1.796 1.174-2.177 2.177l-2.635 6.95c-.443 1.169.701 2.313 1.87 1.87l6.95-2.636c1.003-.38 1.795-1.173 2.176-2.176l2.635-6.95zM16 14c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"
        fill={color}
      />
    </svg>
  );
};

CompassFilled32.category = 'Interface General';

export default CompassFilled32;
