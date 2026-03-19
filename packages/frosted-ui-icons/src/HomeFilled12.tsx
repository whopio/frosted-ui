import * as React from 'react';
import { IconProps } from './types';

export const HomeFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M0.75 5.41987C0.75 4.83602 1.00513 4.28132 1.44842 3.90136L4.4381 1.33877C5.33688 0.568392 6.66312 0.568392 7.5619 1.33877L10.5516 3.90136C10.9949 4.28132 11.25 4.83602 11.25 5.41987V9.75C11.25 10.5784 10.5784 11.25 9.75 11.25H8.76C8.75448 11.25 8.75 11.2455 8.75 11.24V8C8.75 6.48122 7.51878 5.25 6 5.25C4.48122 5.25 3.25 6.48122 3.25 8V11.24C3.25 11.2455 3.24552 11.25 3.24 11.25H2.25C1.42157 11.25 0.75 10.5784 0.75 9.75V5.41987Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

HomeFilled12.category = 'Buildings';

export default HomeFilled12;
