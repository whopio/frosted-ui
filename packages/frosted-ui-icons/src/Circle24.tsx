import * as React from 'react';
import { IconProps } from './types';

export const Circle24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.0005 0.000488261C18.6274 0.000752301 24 5.37302 24 12C23.9997 18.6268 18.6272 23.9992 12.0005 23.9995C5.3735 23.9995 0.000263863 18.6269 0 12C3.21883e-08 5.37285 5.37334 0.000488261 12.0005 0.000488261ZM12.0005 1.50043C6.20173 1.50043 1.50092 6.20125 1.50092 12C1.50118 17.7985 6.2019 22.4996 12.0005 22.4996C17.7989 22.4993 22.4998 17.7984 22.5001 12C22.5001 6.20141 17.799 1.50069 12.0005 1.50043Z"
        fill={color}
      />
    </svg>
  );
};

Circle24.category = 'Interface General';

export default Circle24;
