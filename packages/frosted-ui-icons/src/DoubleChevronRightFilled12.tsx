import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.71792 2.63184C5.22998 2.1437 5.22993 1.35236 5.71792 0.864261C6.20602 0.376166 6.99733 0.376288 7.4855 0.864261L11.5587 4.9375C12.1445 5.52329 12.1445 6.47282 11.5587 7.0586L7.4855 11.1318C6.99734 11.6199 6.20605 11.62 5.71792 11.1318C5.22998 10.6437 5.22992 9.85236 5.71792 9.36426L9.08413 5.99805L5.71792 2.63184ZM0.368314 2.63184C-0.119839 2.14369 -0.119834 1.35242 0.368314 0.864261C0.856477 0.3762 1.64777 0.376137 2.13589 0.864261L6.20913 4.9375C6.79487 5.52326 6.79481 6.47281 6.20913 7.0586L2.13589 11.1318C1.64774 11.62 0.856469 11.62 0.368314 11.1318C-0.119842 10.6437 -0.119842 9.85242 0.368314 9.36426L3.73452 5.99805L0.368314 2.63184Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightFilled12.category = 'Arrows';

export default DoubleChevronRightFilled12;
