import * as React from 'react';
import { IconProps } from './types';

export const ReceiptBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceiptBoldFilled24"
      {...props}
    >
      <path
        d="M18 0c2.21 0 4 1.79 4 4v18.007c0 1.203-1.28 1.976-2.345 1.416l-3.412-1.796-3.445 1.831c-.5.265-1.098.265-1.597-.001l-3.437-1.83-3.42 1.797C3.278 23.984 2 23.21 2 22.007V4c0-2.21 1.79-4 4-4h12zM8 11c-.552 0-1 .448-1 1s.448 1 1 1h4c.552 0 1-.448 1-1s-.448-1-1-1H8zm0-5c-.552 0-1 .448-1 1s.448 1 1 1h8c.552 0 1-.448 1-1s-.448-1-1-1H8z"
        fill={color}
      />
    </svg>
  );
};

ReceiptBoldFilled24.category = 'Money & Shopping';

export default ReceiptBoldFilled24;
