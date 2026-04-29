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
        d="M5.7178 2.63181C5.22986 2.14367 5.2298 1.35233 5.7178 0.86423C6.2059 0.376136 6.99721 0.376258 7.48538 0.86423L11.5586 4.93747C12.1444 5.52326 12.1444 6.47278 11.5586 7.05857L7.48538 11.1318C6.99722 11.6199 6.20593 11.6199 5.7178 11.1318C5.22986 10.6437 5.2298 9.85233 5.7178 9.36423L9.08401 5.99802L5.7178 2.63181ZM0.368192 2.63181C-0.119961 2.14366 -0.119956 1.35239 0.368192 0.86423C0.856355 0.376169 1.64765 0.376106 2.13577 0.86423L6.20901 4.93747C6.79474 5.52323 6.79469 6.47278 6.20901 7.05857L2.13577 11.1318C1.64761 11.62 0.856347 11.62 0.368192 11.1318C-0.119964 10.6437 -0.119964 9.85239 0.368192 9.36423L3.7344 5.99802L0.368192 2.63181Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBoldFilled12.category = 'Arrows';

export default DoubleChevronRightBoldFilled12;
