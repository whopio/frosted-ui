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
        d="M5.7178 2.63184C5.22986 2.1437 5.2298 1.35236 5.7178 0.864261C6.2059 0.376166 6.99721 0.376288 7.48538 0.864261L11.5586 4.9375C12.1444 5.52329 12.1444 6.47282 11.5586 7.0586L7.48538 11.1318C6.99722 11.6199 6.20593 11.62 5.7178 11.1318C5.22986 10.6437 5.2298 9.85236 5.7178 9.36426L9.08401 5.99805L5.7178 2.63184ZM0.368192 2.63184C-0.119961 2.14369 -0.119956 1.35242 0.368192 0.864261C0.856355 0.3762 1.64765 0.376137 2.13577 0.864261L6.20901 4.9375C6.79474 5.52326 6.79469 6.47281 6.20901 7.0586L2.13577 11.1318C1.64761 11.62 0.856347 11.62 0.368192 11.1318C-0.119964 10.6437 -0.119964 9.85242 0.368192 9.36426L3.7344 5.99805L0.368192 2.63184Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBoldFilled12.category = 'Arrows';

export default DoubleChevronRightBoldFilled12;
