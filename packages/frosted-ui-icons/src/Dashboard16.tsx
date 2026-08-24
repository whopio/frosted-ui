import * as React from 'react';
import { IconProps } from './types';

export const Dashboard16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Dashboard16"
      {...props}
    >
      <path
        d="M10.75 1C13.097 1 15 2.903 15 5.25v5.5c0 2.347-1.903 4.25-4.25 4.25h-5.5C2.903 15 1 13.097 1 10.75v-5.5C1 2.903 2.903 1 5.25 1h5.5zm-5.5 1.5C3.731 2.5 2.5 3.731 2.5 5.25v5.5c0 1.519 1.231 2.75 2.75 2.75h5.5c1.519 0 2.75-1.231 2.75-2.75v-5.5c0-1.519-1.231-2.75-2.75-2.75h-5.5zm5.473 3.508c.294-.291.77-.288 1.061.007.291.294.288.77-.007 1.061L9.322 9.498c-.405.4-1.057.4-1.463 0L6.82 8.471 5.276 9.992c-.294.291-.77.288-1.061-.007-.29-.294-.288-.77.007-1.06l1.863-1.84.079-.07c.38-.307.926-.307 1.306 0l.079.07 1.04 1.027 2.133-2.104z"
        fill={color}
      />
    </svg>
  );
};

Dashboard16.category = 'Stats & Charts';

export default Dashboard16;
