import * as React from 'react';
import { IconProps } from './types';

export const CoinbaseFillted16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8.01855 2.5C4.98099 2.5 2.51855 4.96243 2.51855 8C2.51855 11.0376 4.98099 13.5 8.01855 13.5C10.4877 13.4998 12.5755 11.8731 13.2715 9.63477C13.3943 9.23942 13.1726 8.81939 12.7773 8.69629C12.3819 8.57354 11.9619 8.7941 11.8389 9.18945C11.3323 10.8184 9.81229 11.9998 8.01855 12C5.80942 12 4.01855 10.2091 4.01855 8C4.01855 5.79086 5.80942 4 8.01855 4C9.8123 4.00016 11.3323 5.18159 11.8389 6.81055C11.9619 7.2059 12.3819 7.42646 12.7773 7.30371C13.1726 7.18061 13.3943 6.76059 13.2715 6.36523C12.5755 4.12691 10.4877 2.50016 8.01855 2.5Z"
        fill={color}
      />
    </svg>
  );
};

CoinbaseFillted16.category = 'Interface General';

export default CoinbaseFillted16;
