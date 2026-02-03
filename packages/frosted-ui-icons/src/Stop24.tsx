import * as React from 'react';
import { IconProps } from './types';

export const Stop24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.2503 0C20.5301 0.000263848 24 3.47079 24 7.75066V16.2503C23.9997 20.53 20.53 23.9997 16.2503 24H7.75066C3.47079 24 0.0012405 20.5301 0.000976523 16.2503V7.75066C0.000976523 3.47063 3.47063 3.66692e-08 7.75066 0H16.2503ZM7.75066 1.50092C4.29902 1.50092 1.50092 4.29902 1.50092 7.75066V16.2503C1.50118 19.7017 4.29918 22.5001 7.75066 22.5001H16.2503C19.7016 22.4998 22.4998 19.7016 22.5001 16.2503V7.75066C22.5001 4.29918 19.7017 1.50118 16.2503 1.50092H7.75066Z"
        fill={color}
      />
    </svg>
  );
};

Stop24.category = 'Interface General';

export default Stop24;
