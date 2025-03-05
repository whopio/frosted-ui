import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M9.71224 2.28767L2.28761 9.7123M2.28761 9.7123L2.46439 3.52511M2.28761 9.7123L8.4748 9.53552"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownLeft12;
