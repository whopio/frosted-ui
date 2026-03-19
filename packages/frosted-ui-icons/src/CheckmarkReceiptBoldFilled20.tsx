import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 0C17.6567 0.000197253 19 1.34327 19 3V18.6846C18.9999 19.6366 18.0095 20.2654 17.1475 19.8613L13.8799 18.3281L10.6191 19.8672C10.2273 20.052 9.77264 20.0522 9.38086 19.8672L6.12891 18.3281L2.85156 19.8623C1.98963 20.2657 1.00016 19.6372 1 18.6855V3C1 1.34315 2.34315 0 4 0H16ZM6.5 13C5.67157 13 5 13.6716 5 14.5C5 15.3284 5.67157 16 6.5 16H13.5C14.3284 16 15 15.3284 15 14.5C15 13.6716 14.3284 13 13.5 13H6.5ZM14.3105 4.43945C13.7248 3.85367 12.7752 3.85367 12.1895 4.43945L8.75 7.87891L7.81055 6.93945C7.22476 6.35367 6.27524 6.35367 5.68945 6.93945C5.10367 7.52524 5.10367 8.47476 5.68945 9.06055L7.68945 11.0605C8.27524 11.6463 9.22476 11.6463 9.81055 11.0605L14.3105 6.56055C14.8963 5.97476 14.8963 5.02524 14.3105 4.43945Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkReceiptBoldFilled20.category = 'Money & Shopping';

export default CheckmarkReceiptBoldFilled20;
