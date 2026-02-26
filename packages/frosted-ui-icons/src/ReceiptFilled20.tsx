import * as React from 'react';
import { IconProps } from './types';

export const ReceiptFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 0C17.6567 0.000197253 19 1.34327 19 3V18.6846C18.9999 19.6366 18.0095 20.2654 17.1475 19.8613L13.8799 18.3281L10.6191 19.8672C10.2273 20.052 9.77264 20.0522 9.38086 19.8672L6.12891 18.3281L2.85156 19.8623C1.98963 20.2657 1.00016 19.6372 1 18.6855V3C1 1.34315 2.34315 0 4 0H16ZM5.75 9C5.33579 9 5 9.33579 5 9.75C5 10.1642 5.33579 10.5 5.75 10.5H10.25C10.6642 10.5 11 10.1642 11 9.75C11 9.33579 10.6642 9 10.25 9H5.75ZM5.75 5C5.33579 5 5 5.33579 5 5.75C5 6.16421 5.33579 6.5 5.75 6.5H14.25C14.6642 6.5 15 6.16421 15 5.75C15 5.33579 14.6642 5 14.25 5H5.75Z"
        fill={color}
      />
    </svg>
  );
};

ReceiptFilled20.category = 'Money & Shopping';

export default ReceiptFilled20;
