import * as React from 'react';
import { IconProps } from './types';

export const Pulse32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M30.4628 8.4766C30.7518 8.18002 31.2267 8.17396 31.5234 8.46293C31.8199 8.75196 31.826 9.2268 31.537 9.52348L19.7118 21.6641C19.1721 22.2178 18.2817 22.218 17.7421 21.6641L10.5448 14.2735L1.53703 23.5235C1.248 23.8201 0.773153 23.8261 0.476479 23.5371C0.179899 23.2481 0.173839 22.7733 0.462807 22.4766L9.56046 13.1368L9.66593 13.0391C10.1743 12.6149 10.9175 12.6146 11.4257 13.0391L11.5302 13.1368L18.7265 20.5254L30.4628 8.4766Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Pulse32.category = 'Stats & Charts';

export default Pulse32;
