import * as React from 'react';
import { IconProps } from './types';

export const ReceiptBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceiptBold12"
      {...props}
    >
      <path
        d="M9 0c1.105 0 2 .895 2 2v8.706c0 .92-.93 1.55-1.784 1.207l-1.35-.542-1.221.5c-.414.17-.877.169-1.29 0l-1.214-.5-1.359.543C1.928 12.255 1 11.627 1 10.707V2c0-1.105.895-2 2-2h6zM3 9.673l.51-.204c.36-.144.756-.16 1.123-.05l.156.057 1.212.498 1.222-.5.155-.055c.367-.11.762-.093 1.121.05l.501.2V2H3v7.673zM6 6c.552 0 1 .448 1 1s-.448 1-1 1H5c-.552 0-1-.448-1-1s.448-1 1-1h1zm1-3c.552 0 1 .448 1 1s-.448 1-1 1H5c-.552 0-1-.448-1-1s.448-1 1-1h2z"
        fill={color}
      />
    </svg>
  );
};

ReceiptBold12.category = 'Money & Shopping';

export default ReceiptBold12;
