import * as React from 'react';
import { IconProps } from './types';

export const ReceiptBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 0C17.6567 0.000197253 19 1.34327 19 3V18.6846C18.9999 19.6366 18.0095 20.2654 17.1475 19.8613L13.8799 18.3281L10.6191 19.8672C10.2273 20.052 9.77264 20.0522 9.38086 19.8672L6.12891 18.3281L2.85156 19.8623C1.98963 20.2657 1.00016 19.6372 1 18.6855V3C1 1.34315 2.34315 0 4 0H16ZM5.5 9C4.67157 9 4 9.67157 4 10.5C4 11.3284 4.67157 12 5.5 12H9.5C10.3284 12 11 11.3284 11 10.5C11 9.67157 10.3284 9 9.5 9H5.5ZM5.5 4C4.67157 4 4 4.67157 4 5.5C4 6.32843 4.67157 7 5.5 7H14.5C15.3284 7 16 6.32843 16 5.5C16 4.67157 15.3284 4 14.5 4H5.5Z"
        fill={color}
      />
    </svg>
  );
};

ReceiptBoldFilled20.category = 'Money & Shopping';

export default ReceiptBoldFilled20;
