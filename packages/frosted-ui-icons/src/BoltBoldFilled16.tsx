import * as React from 'react';
import { IconProps } from './types';

export const BoltBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BoltBoldFilled16"
      {...props}
    >
      <path
        d="M7.322.52c.715-.98 2.319-.49 2.32.769v4.018h2.782c1.078 0 1.741 1.18 1.18 2.102l-4.851 7.968c-.677 1.111-2.386.63-2.386-.67V10.69H3.585c-1.078 0-1.742-1.18-1.18-2.102L7.254.62l.067-.1z"
        fill={color}
      />
    </svg>
  );
};

BoltBoldFilled16.category = 'Nature & Weather';

export default BoltBoldFilled16;
