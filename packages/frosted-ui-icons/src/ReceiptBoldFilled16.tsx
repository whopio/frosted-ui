import * as React from 'react';
import { IconProps } from './types';

export const ReceiptBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.75 0C13.2688 0 14.5 1.23122 14.5 2.75V14.1895C14.5 15.3055 13.3246 16.0309 12.3271 15.5303L10.5674 14.6465L8.73242 15.5225C8.26884 15.7435 7.72989 15.7432 7.2666 15.5215L5.43945 14.6465L3.6709 15.5322C2.67358 16.031 1.5 15.3056 1.5 14.1904V2.75C1.5 1.23122 2.73122 0 4.25 0H11.75ZM6 7.5C5.44772 7.5 5 7.94772 5 8.5C5 9.05229 5.44772 9.5 6 9.5H8C8.55229 9.5 9 9.05229 9 8.5C9 7.94772 8.55229 7.5 8 7.5H6ZM6 4C5.44772 4 5 4.44772 5 5C5 5.55228 5.44772 6 6 6H10C10.5523 6 11 5.55228 11 5C11 4.44772 10.5523 4 10 4H6Z"
        fill={color}
      />
    </svg>
  );
};

ReceiptBoldFilled16.category = 'Money & Shopping';

export default ReceiptBoldFilled16;
