import * as React from 'react';
import { IconProps } from './types';

export const BoltFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.37091 0.43066C5.94573 -0.368112 7.24972 0.0251078 7.24982 1.04687V4H9.46075C10.2837 4.0003 10.7864 4.90417 10.3524 5.60351L6.6922 11.5019C6.13499 12.3993 4.75033 12.0043 4.74982 10.9482V8.25H2.53009C1.71398 8.25 1.20993 7.35998 1.6297 6.66015L5.31818 0.511715L5.37091 0.43066Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BoltFilled12.category = 'Nature & Weather';

export default BoltFilled12;
