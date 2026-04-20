import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14.75 0.00012207C16.5449 0.00012207 18 1.4552 18 3.25012V18.087C17.9997 19.2547 16.7568 20.0025 15.7246 19.4562L13.293 18.1691L10.7988 19.4972C10.2991 19.763 9.69964 19.7627 9.2002 19.4962L6.71289 18.1691L4.27344 19.4581C3.2414 20.0029 2.00034 19.255 2 18.088V3.25012C2 1.4552 3.45507 0.00012207 5.25 0.00012207H14.75ZM13.957 5.79309C13.5665 5.40257 12.9335 5.40257 12.543 5.79309L8.75 9.58606L7.45703 8.29309C7.06651 7.90257 6.43349 7.90257 6.04297 8.29309C5.65244 8.68361 5.65244 9.31663 6.04297 9.70715L8.04297 11.7072C8.4335 12.0976 9.06653 12.0977 9.45703 11.7072L13.957 7.20715C14.3475 6.81665 14.3475 6.18362 13.957 5.79309Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkReceiptBoldFilled20.category = 'Money & Shopping';

export default CheckmarkReceiptBoldFilled20;
