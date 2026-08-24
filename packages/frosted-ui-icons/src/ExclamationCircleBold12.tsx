import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationCircleBold12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 2C3.79 2 2 3.79 2 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 5.25c.552 0 1 .448 1 1v.01c0 .552-.448 1-1 1s-1-.448-1-1v-.01c0-.552.448-1 1-1zm0-4.5c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1s-1-.448-1-1v-2c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircleBold12.category = 'Interface General';

export default ExclamationCircleBold12;
