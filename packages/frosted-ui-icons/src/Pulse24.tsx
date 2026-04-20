import * as React from 'react';
import { IconProps } from './types';

export const Pulse24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22.4697 6.46997C22.7626 6.17708 23.2374 6.17708 23.5303 6.46997C23.8231 6.76287 23.8231 7.23765 23.5303 7.53052L14.8545 16.2063C14.3826 16.6782 13.6174 16.6781 13.1455 16.2063L8 11.0608L1.53027 17.5305C1.23741 17.8234 0.762626 17.8233 0.469727 17.5305C0.176834 17.2376 0.176833 16.7629 0.469727 16.47L7.14551 9.79419L7.2373 9.71118C7.6803 9.34981 8.3197 9.3498 8.7627 9.71118L8.85449 9.79419L14 14.9397L22.4697 6.46997Z"
        fill={color}
      />
    </svg>
  );
};

Pulse24.category = 'Stats & Charts';

export default Pulse24;
