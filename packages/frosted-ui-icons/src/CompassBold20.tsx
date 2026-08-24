import * as React from 'react';
import { IconProps } from './types';

export const CompassBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CompassBold20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm0 2c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zm2.285 2.982c1.402-.415 2.719.962 2.186 2.368l-1.342 3.538c-.305.802-.939 1.436-1.741 1.74L7.85 14.472c-1.451.55-2.872-.87-2.322-2.322L6.87 8.611c.305-.802.939-1.436 1.741-1.74l3.538-1.343.136-.046zM9.321 8.74c-.267.102-.48.314-.58.581l-1.185 3.121 3.123-1.183c.267-.102.478-.313.58-.58l1.183-3.123-3.12 1.184z"
        fill={color}
      />
    </svg>
  );
};

CompassBold20.category = 'Interface General';

export default CompassBold20;
