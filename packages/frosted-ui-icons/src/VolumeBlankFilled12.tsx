import * as React from 'react';
import { IconProps } from './types';

export const VolumeBlankFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.16797 1.43478C5.05006 0.638059 6.49964 1.25447 6.5 2.4797V9.51974C6.49998 10.785 4.95459 11.4007 4.08398 10.4826L2.67773 9.00021H1.5C0.671707 9.00021 0.000217716 8.32845 0 7.50021V4.50021C0.000135865 3.6719 0.671657 3.00021 1.5 3.00021H2.67676L4.08398 1.51681L4.16797 1.43478Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeBlankFilled12.category = 'Sound & Music';

export default VolumeBlankFilled12;
