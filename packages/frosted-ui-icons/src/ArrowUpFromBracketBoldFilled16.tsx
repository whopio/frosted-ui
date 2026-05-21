import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracketBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.5 7.25001C14.3284 7.25001 14.9999 7.92164 15 8.75001V10C14.9998 12.7613 12.7613 15 10 15H6C3.2387 15 1.0002 12.7613 1 10V8.75001C1.00007 7.92164 1.67161 7.25001 2.5 7.25001C3.32839 7.25001 3.99993 7.92164 4 8.75001V10C4.0002 11.1044 4.89555 12 6 12H10C11.1044 12 11.9998 11.1044 12 10V8.75001C12.0001 7.92164 12.6716 7.25001 13.5 7.25001ZM6.84277 1.41114C7.51475 0.863274 8.48427 0.863282 9.15625 1.41114L9.2959 1.53712L11.6982 3.93946C12.2839 4.52523 12.2839 5.4748 11.6982 6.06056C11.1125 6.64591 10.1628 6.6461 9.57715 6.06056L9.49902 5.98243V9.00001C9.49883 9.82827 8.82733 10.5 7.99902 10.5C7.17111 10.4995 6.49922 9.82799 6.49902 9.00001V5.98341L6.42188 6.06056C5.83605 6.64594 4.88643 6.64621 4.30078 6.06056C3.71518 5.4749 3.71541 4.52526 4.30078 3.93946L6.70312 1.53712L6.84277 1.41114Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracketBoldFilled16.category = 'Arrows';

export default ArrowUpFromBracketBoldFilled16;
