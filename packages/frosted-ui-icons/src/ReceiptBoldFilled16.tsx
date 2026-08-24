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
      data-fui-icon="ReceiptBoldFilled16"
      {...props}
    >
      <path
        d="M11.75 0c1.519 0 2.75 1.231 2.75 2.75v11.44c0 1.116-1.175 1.84-2.173 1.34l-1.76-.883-1.835.876c-.463.22-1.002.22-1.465-.002l-1.828-.875-1.768.886c-.997.499-2.171-.226-2.171-1.342V2.75C1.5 1.231 2.731 0 4.25 0h7.5zM6 7.5c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1H6zM6 4c-.552 0-1 .448-1 1s.448 1 1 1h4c.552 0 1-.448 1-1s-.448-1-1-1H6z"
        fill={color}
      />
    </svg>
  );
};

ReceiptBoldFilled16.category = 'Money & Shopping';

export default ReceiptBoldFilled16;
