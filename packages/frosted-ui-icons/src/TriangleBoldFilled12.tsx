import * as React from 'react';
import { IconProps } from './types';

export const TriangleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.0537 1.64592C4.87904 0.0813597 7.12066 0.0805076 7.94612 1.64494L11.7057 8.77356C12.4783 10.2385 11.4158 12 9.75952 12H2.2403C0.584018 12 -0.478516 10.2385 0.29409 8.77356L4.0537 1.64592Z"
        fill={color}
      />
    </svg>
  );
};

TriangleBoldFilled12.category = 'Interface General';

export default TriangleBoldFilled12;
