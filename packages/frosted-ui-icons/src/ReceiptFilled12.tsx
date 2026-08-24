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
      data-fui-icon="ReceiptFilled12"
      {...props}
    >
      <path
        d="M9.25 0C10.216 0 11 .784 11 1.75v9.208c0 .741-.748 1.25-1.437.977l-1.58-.627-1.439.582c-.35.14-.74.14-1.089-.001l-1.43-.581-1.59.627C1.747 12.207 1 11.7 1 10.96V1.75C1 .784 1.784 0 2.75 0h6.5zM4.5 6c-.414 0-.75.336-.75.75s.336.75.75.75H6c.414 0 .75-.336.75-.75S6.414 6 6 6H4.5zm0-3c-.414 0-.75.336-.75.75s.336.75.75.75h3c.414 0 .75-.336.75-.75S7.914 3 7.5 3h-3z"
        fill={color}
      />
    </svg>
  );
};

ReceiptFilled12.category = 'Money & Shopping';

export default ReceiptFilled12;
