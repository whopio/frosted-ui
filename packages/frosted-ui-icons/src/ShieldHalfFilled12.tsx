import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.37402 0.116699C5.77703 -0.0376562 6.22297 -0.0376564 6.62598 0.116699L10.376 1.5542C11.0528 1.81359 11.5 2.46311 11.5 3.18799V6.75049C11.4997 8.41463 10.1999 9.67046 9.08984 10.4604C7.93113 11.285 6.70056 11.7992 6.36133 11.9341C6.12766 12.0269 5.87234 12.0269 5.63867 11.9341C5.29944 11.7992 4.06887 11.285 2.91016 10.4604C1.80006 9.67046 0.500291 8.41463 0.5 6.75049V3.18799C0.5 2.46311 0.94715 1.81359 1.62402 1.5542L5.37402 0.116699ZM6.75 10.1069C7.18821 9.88729 7.71633 9.59671 8.2207 9.23779C9.28427 8.48083 9.99969 7.61902 10 6.75049V3.18799C10 3.0846 9.93628 2.99176 9.83984 2.95459L6.75 1.77002V10.1069Z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfFilled12.category = 'Security';

export default ShieldHalfFilled12;
