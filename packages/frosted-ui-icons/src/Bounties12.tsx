import * as React from 'react';
import { IconProps } from './types';

export const Bounties12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <circle cx="6.519" cy="6.519" r="5.806" stroke={color} strokeWidth="1.25" />
      <circle cx="6.481" cy="6.481" r="2.43" stroke={color} strokeWidth="1.25" />
    </svg>
  );
};

Bounties12.category = 'Interface General';

export default Bounties12;
