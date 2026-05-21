import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.71768 2.63193C5.22974 2.14379 5.22968 1.35245 5.71768 0.864352C6.20577 0.376258 6.99709 0.37638 7.48526 0.864352L11.5585 4.93759C12.1443 5.52338 12.1443 6.47291 11.5585 7.05869L7.48526 11.1319C6.99709 11.62 6.2058 11.6201 5.71768 11.1319C5.22974 10.6438 5.22967 9.85245 5.71768 9.36435L9.08389 5.99814L5.71768 2.63193ZM0.36807 2.63193C-0.120083 2.14378 -0.120078 1.35251 0.36807 0.864352C0.856233 0.376291 1.64752 0.376228 2.13565 0.864352L6.20889 4.93759C6.79462 5.52335 6.79456 6.4729 6.20889 7.05869L2.13565 11.1319C1.64749 11.6201 0.856225 11.6201 0.36807 11.1319C-0.120086 10.6438 -0.120086 9.85251 0.36807 9.36435L3.73428 5.99814L0.36807 2.63193Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBoldFilled12.category = 'Arrows';

export default DoubleChevronRightBoldFilled12;
