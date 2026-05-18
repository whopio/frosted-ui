import * as React from 'react';
import { IconProps } from './types';

export const Pulse12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.4697 3.46982C10.7626 3.17693 11.2373 3.17693 11.5302 3.46982C11.823 3.76272 11.8231 4.2375 11.5302 4.53037L7.70697 8.35361C7.31648 8.74409 6.68344 8.74404 6.29291 8.35361L3.99994 6.06064L1.53022 8.53037C1.23735 8.82324 0.762569 8.82319 0.46967 8.53037C0.176777 8.23748 0.176777 7.76272 0.46967 7.46982L3.29291 4.64658L3.36908 4.57822C3.73566 4.27925 4.26422 4.27925 4.6308 4.57822L4.70697 4.64658L6.99994 6.93955L10.4697 3.46982Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Pulse12.category = 'Stats & Charts';

export default Pulse12;
