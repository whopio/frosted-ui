import * as React from 'react';
import { IconProps } from './types';

export const CreditCardAddFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardAddFilled16"
      {...props}
    >
      <path
        d="M12 8.75c.414 0 .75.336.75.75v1.25c0 .138.112.25.25.25h1.25c.414 0 .75.336.75.75s-.336.75-.75.75H13c-.138 0-.25.112-.25.25V14c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25c0-.138-.112-.25-.25-.25H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H11c.138 0 .25-.112.25-.25V9.5c0-.414.336-.75.75-.75zM9.94 7.5c.263 0 .409.451.252.662-.23.31-.383.683-.428 1.088-.015.138-.126.249-.264.264-1.125.124-2 1.078-2 2.236 0 .453.134.875.365 1.228.129.197 0 .522-.235.522H4.15C2.41 13.5 1 12.09 1 10.35v-2.6c0-.138.112-.25.25-.25h8.69zm1.91-5C13.59 2.5 15 3.91 15 5.65v.1c0 .138-.112.25-.25.25H1.25C1.112 6 1 5.888 1 5.75v-.1C1 3.91 2.41 2.5 4.15 2.5h7.7z"
        fill={color}
      />
    </svg>
  );
};

CreditCardAddFilled16.category = 'Money & Shopping';

export default CreditCardAddFilled16;
