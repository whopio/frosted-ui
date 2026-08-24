import * as React from 'react';
import { IconProps } from './types';

export const Dashboard24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Dashboard24"
      {...props}
    >
      <path
        d="M16.5 1C20.09 1 23 3.91 23 7.5v9c0 3.59-2.91 6.5-6.5 6.5h-9C3.91 23 1 20.09 1 16.5v-9C1 3.91 3.91 1 7.5 1h9zm-9 1.5c-2.761 0-5 2.239-5 5v9c0 2.761 2.239 5 5 5h9c2.761 0 5-2.239 5-5v-9c0-2.761-2.239-5-5-5h-9zm9.23 6.667c.3-.287.774-.277 1.061.021.287.3.277.774-.021 1.061l-3.979 3.82c-.468.449-1.206.45-1.674 0l-2.027-1.947-2.82 2.71c-.3.287-.774.277-1.061-.022-.287-.298-.277-.773.021-1.06l3.024-2.903c.467-.449 1.206-.449 1.674 0l2.026 1.946 3.776-3.626z"
        fill={color}
      />
    </svg>
  );
};

Dashboard24.category = 'Stats & Charts';

export default Dashboard24;
