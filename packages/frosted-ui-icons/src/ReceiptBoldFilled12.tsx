import * as React from 'react';
import { IconProps } from './types';

export const ReceiptBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceiptBoldFilled12"
      {...props}
    >
      <path
        d="M9 0c1.105 0 2 .895 2 2v8.706c0 .92-.93 1.55-1.784 1.207l-1.35-.542-1.221.5c-.414.17-.877.169-1.29 0l-1.214-.5-1.359.543C1.928 12.255 1 11.627 1 10.707V2c0-1.105.895-2 2-2h6zM5 6c-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1-.448 1-1s-.448-1-1-1H5zm0-3c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1H5z"
        fill={color}
      />
    </svg>
  );
};

ReceiptBoldFilled12.category = 'Money & Shopping';

export default ReceiptBoldFilled12;
