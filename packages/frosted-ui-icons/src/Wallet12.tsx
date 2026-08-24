import * as React from 'react';
import { IconProps } from './types';

export const Wallet12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Wallet12"
      {...props}
    >
      <path
        d="M6.25.5C7.769.5 9 1.731 9 3.25v.25h.25C10.769 3.5 12 4.731 12 6.25v2.5c0 1.519-1.231 2.75-2.75 2.75h-6.5C1.231 11.5 0 10.269 0 8.75V3c0-.034.002-.068.007-.1C.004 2.85 0 2.8 0 2.75 0 1.507 1.007.5 2.25.5h4zM1.5 8.75c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-2.5C10.5 5.56 9.94 5 9.25 5h-7c-.263 0-.515-.049-.75-.132V8.75zM8 6.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zM2.25 2c-.414 0-.75.336-.75.75s.336.75.75.75H7.5v-.25C7.5 2.56 6.94 2 6.25 2h-4z"
        fill={color}
      />
    </svg>
  );
};

Wallet12.category = 'Money & Shopping';

export default Wallet12;
