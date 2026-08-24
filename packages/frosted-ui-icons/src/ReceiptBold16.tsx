import * as React from 'react';
import { IconProps } from './types';

export const ReceiptBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceiptBold16"
      {...props}
    >
      <path
        d="M11.75 0c1.519 0 2.75 1.231 2.75 2.75v11.44c0 1.116-1.175 1.84-2.173 1.34l-1.76-.883-1.835.876c-.463.22-1.002.22-1.465-.002l-1.828-.875-1.768.886c-.997.499-2.171-.226-2.171-1.342V2.75C1.5 1.231 2.731 0 4.25 0h7.5zm-7.5 2c-.414 0-.75.336-.75.75v10.63l1.264-.631.159-.068c.322-.118.675-.12 1-.01l.16.066L8 13.654l1.927-.918c.365-.174.784-.192 1.16-.054l.16.068 1.253.629V2.75c0-.414-.336-.75-.75-.75h-7.5zM8 7.5c.552 0 1 .448 1 1s-.448 1-1 1H6c-.552 0-1-.448-1-1s.448-1 1-1h2zM10 4c.552 0 1 .448 1 1s-.448 1-1 1H6c-.552 0-1-.448-1-1s.448-1 1-1h4z"
        fill={color}
      />
    </svg>
  );
};

ReceiptBold16.category = 'Money & Shopping';

export default ReceiptBold16;
