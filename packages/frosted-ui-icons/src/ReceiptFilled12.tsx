import * as React from 'react';
import { IconProps } from './types';

export const ReceiptFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.25 0C10.2163 0.000197241 11 0.783623 11 1.75V10.958C11 11.6992 10.2525 12.2072 9.56348 11.9346L7.98242 11.3076L6.54395 11.8896C6.19486 12.0307 5.80395 12.0302 5.45508 11.8887L4.02539 11.3076L2.43555 11.9355C1.74649 12.2075 1 11.6998 1 10.959V1.75C1 0.783502 1.7835 0 2.75 0H9.25ZM4.5 6C4.08579 6 3.75 6.33579 3.75 6.75C3.75 7.16421 4.08579 7.5 4.5 7.5H6C6.41421 7.5 6.75 7.16421 6.75 6.75C6.75 6.33579 6.41421 6 6 6H4.5ZM4.5 3C4.08579 3 3.75 3.33579 3.75 3.75C3.75 4.16421 4.08579 4.5 4.5 4.5H7.5C7.91421 4.5 8.25 4.16421 8.25 3.75C8.25 3.33579 7.91421 3 7.5 3H4.5Z"
        fill={color}
      />
    </svg>
  );
};

ReceiptFilled12.category = 'Money & Shopping';

export default ReceiptFilled12;
