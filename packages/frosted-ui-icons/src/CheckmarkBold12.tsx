import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.2919 2.04224C10.6823 1.65183 11.3164 1.65204 11.7069 2.04224C12.0974 2.43277 12.0974 3.06676 11.7069 3.45728L4.70691 10.4563C4.51946 10.6438 4.26496 10.7502 3.99988 10.7503C3.73477 10.7502 3.48031 10.6438 3.29285 10.4563L0.292846 7.45728C-0.0976468 7.06679 -0.0975838 6.43375 0.292846 6.04322C0.68337 5.6527 1.31638 5.6527 1.70691 6.04322L3.99988 8.33521L10.2919 2.04224Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkBold12.category = 'Checkmarks';

export default CheckmarkBold12;
