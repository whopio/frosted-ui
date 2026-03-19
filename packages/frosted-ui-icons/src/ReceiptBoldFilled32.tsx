import * as React from 'react';
import { IconProps } from './types';

export const ReceiptBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M24.25 1C26.8732 1.0002 29 3.12677 29 5.75V29.5908C28.9999 30.6146 27.9044 31.2653 27.0049 30.7764L21.6455 27.8623L16.7422 30.7812C16.2851 31.0533 15.7148 31.0534 15.2578 30.7812L10.3613 27.8623L4.99414 30.7783C4.09474 31.2665 3.00024 30.6151 3 29.5918V5.75C3 3.12665 5.12665 1 7.75 1H24.25ZM9.5 14C8.67157 14 8 14.6716 8 15.5C8 16.3284 8.67157 17 9.5 17H17.5C18.3284 17 19 16.3284 19 15.5C19 14.6716 18.3284 14 17.5 14H9.5ZM9.5 8C8.67157 8 8 8.67157 8 9.5C8 10.3284 8.67157 11 9.5 11H22.5C23.3284 11 24 10.3284 24 9.5C24 8.67157 23.3284 8 22.5 8H9.5Z"
        fill={color}
      />
    </svg>
  );
};

ReceiptBoldFilled32.category = 'Money & Shopping';

export default ReceiptBoldFilled32;
