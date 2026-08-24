import * as React from 'react';
import { IconProps } from './types';

export const LockOpenFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LockOpenFilled12"
      {...props}
    >
      <path
        d="M6 0c1.492 0 2.794.817 3.481 2.028.263.463-.126.972-.658.972-.323 0-.607-.2-.797-.462C7.573 1.91 6.835 1.5 6 1.5 4.62 1.5 3.5 2.62 3.5 4v1H9c1.38 0 2.5 1.12 2.5 2.5v2c0 1.38-1.12 2.5-2.5 2.5H3C1.62 12 .5 10.88.5 9.5v-2c0-1.025.617-1.905 1.5-2.291V4c0-2.21 1.79-4 4-4z"
        fill={color}
      />
    </svg>
  );
};

LockOpenFilled12.category = 'Security';

export default LockOpenFilled12;
