import * as React from 'react';
import { IconProps } from './types';

export const HomeBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M0.99998 5.42501C0.99998 4.83829 1.25762 4.28116 1.70467 3.90117L4.44555 1.57142C5.34176 0.809638 6.65799 0.809636 7.5542 1.57142L10.2951 3.90117C10.7421 4.28116 10.9998 4.83829 10.9998 5.42501V9.50005C10.9998 10.3285 10.3282 11 9.49981 11H9.00982C9.00429 11 8.99982 10.9955 8.99982 10.99V8.00008C8.99982 6.34326 7.6567 5.00014 5.99988 5.00014C4.34306 5.00014 2.99994 6.34326 2.99994 8.00008V10.99C2.99994 10.9955 2.99546 11 2.98994 11H2.49995C1.67154 11 0.99998 10.3285 0.99998 9.50005V5.42501Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

HomeBoldFilled12.category = 'Buildings';

export default HomeBoldFilled12;
