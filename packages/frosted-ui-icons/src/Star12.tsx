import * as React from 'react';
import { IconProps } from './types';

export const Star12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.04284 2.05204L5.04282 2.05209L4.17401 3.86291L2.17372 4.12514L2.17371 4.12514C1.29043 4.24095 0.930381 5.33153 1.5828 5.94747L3.043 7.32603L2.67644 9.2948L2.67643 9.29481C2.51225 10.1767 3.44435 10.8429 4.22452 10.4218L6 9.46344L7.77546 10.4218C8.55571 10.843 9.48771 10.1766 9.32355 9.29481L8.95701 7.32602L10.4172 5.9475C11.0696 5.33157 10.7096 4.24094 9.82627 4.12514C9.82627 4.12514 9.82627 4.12514 9.82627 4.12514L7.82598 3.86291L6.95719 2.05209L6.95716 2.05204C6.57196 1.24932 5.42805 1.24932 5.04284 2.05204ZM3.08693 7.09008L3.08692 7.0901C3.08692 7.09009 3.08692 7.09009 3.08693 7.09008Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Star12;
