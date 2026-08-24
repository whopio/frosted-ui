import * as React from 'react';
import { IconProps } from './types';

export const StatsBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StatsBold12"
      {...props}
    >
      <path
        d="M1 0c.552 0 1 .448 1 1v8.688c0 .172.14.312.313.312H11c.552 0 1 .448 1 1s-.448 1-1 1H2.312C1.036 12 0 10.964 0 9.687V1c0-.552.448-1 1-1zm9 1c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1s-1-.448-1-1V4.414L5.707 7.707c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L7.586 3H6c-.552 0-1-.448-1-1s.448-1 1-1h4z"
        fill={color}
      />
    </svg>
  );
};

StatsBold12.category = 'Stats & Charts';

export default StatsBold12;
