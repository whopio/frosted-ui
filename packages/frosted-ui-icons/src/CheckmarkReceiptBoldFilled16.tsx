import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.75 0.00012207C13.2688 0.00012207 14.5 1.23134 14.5 2.75012V14.1896C14.4999 15.3055 13.3246 16.0309 12.3271 15.5304L10.5674 14.6466L8.73242 15.5226C8.26887 15.7436 7.72987 15.7433 7.2666 15.5216L5.43945 14.6466L3.6709 15.5323C2.67362 16.0311 1.50009 15.3056 1.5 14.1906V2.75012C1.5 1.23134 2.73122 0.00012207 4.25 0.00012207H11.75ZM10.957 4.79309C10.5665 4.40257 9.93349 4.40257 9.54297 4.79309L7.125 7.21106L6.45703 6.54309C6.06651 6.15257 5.43349 6.15257 5.04297 6.54309C4.65244 6.93362 4.65244 7.56663 5.04297 7.95715L6.41797 9.33215C6.8085 9.7226 7.44153 9.72265 7.83203 9.33215L10.957 6.20715C11.3475 5.81665 11.3475 5.18362 10.957 4.79309Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkReceiptBoldFilled16.category = 'Money & Shopping';

export default CheckmarkReceiptBoldFilled16;
