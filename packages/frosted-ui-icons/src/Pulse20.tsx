import * as React from 'react';
import { IconProps } from './types';

export const Pulse20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18.4775 5.46338C18.7737 5.17416 19.2486 5.17922 19.5381 5.4751C19.8275 5.77113 19.8221 6.24602 19.5264 6.53564L12.4248 13.479C11.9876 13.9065 11.2888 13.9065 10.8516 13.479L6.72852 9.44775L1.52637 14.5356C1.23023 14.8252 0.755413 14.82 0.46582 14.5239C0.176358 14.2278 0.181502 13.7529 0.477539 13.4634L5.94238 8.11963L6.02734 8.04443C6.43664 7.71731 7.02137 7.71731 7.43066 8.04443L7.51562 8.11963L11.6377 12.1499L18.4775 5.46338Z"
        fill={color}
      />
    </svg>
  );
};

Pulse20.category = 'Stats & Charts';

export default Pulse20;
