import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmarkBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.7109 1.27212C15.6089 0.907977 16.6143 0.91074 17.5098 1.28091L26.2188 4.88149C27.5995 5.4526 28.5009 6.79937 28.501 8.2936V17.444C28.5007 21.3389 25.8494 24.5139 23.2246 26.7252C20.5633 28.9673 17.6948 30.4169 16.8057 30.8415C16.3663 31.0512 15.8608 31.0544 15.418 30.8473C14.52 30.4268 11.5971 28.9793 8.88379 26.7379C6.21041 24.5294 3.50023 21.3506 3.5 17.444V8.3063C3.50011 6.803 4.41163 5.44955 5.80469 4.88442L14.7109 1.27212ZM21.2266 12.0426C20.8361 11.6524 20.203 11.6524 19.8125 12.0426L14.2285 17.6247L12.4199 15.817C12.0295 15.4268 11.3963 15.4268 11.0059 15.817C10.6155 16.2075 10.6156 16.8406 11.0059 17.2311L13.5215 19.7477C13.912 20.1382 14.546 20.1382 14.9365 19.7477L21.2266 13.4567C21.6169 13.0661 21.617 12.4331 21.2266 12.0426Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldCheckmarkBoldFilled32.category = 'Security';

export default ShieldCheckmarkBoldFilled32;
