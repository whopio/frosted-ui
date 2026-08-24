import * as React from 'react';
import { IconProps } from './types';

export const CreditCardAddFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardAddFilled24"
      {...props}
    >
      <path
        d="M18.75 14c.414 0 .75.336.75.75v2.5c0 .138.112.25.25.25h2.5c.414 0 .75.336.75.75s-.336.75-.75.75h-2.5c-.138 0-.25.112-.25.25v2.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.5c0-.138-.112-.25-.25-.25h-2.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.5c.138 0 .25-.112.25-.25v-2.5c0-.414.336-.75.75-.75zM23 15.75v.054c-.003.163-.167.268-.326.237-.138-.027-.28-.041-.424-.041h-1c-.138 0-.25-.112-.25-.25v-1c0-1.243-1.007-2.25-2.25-2.25s-2.25 1.007-2.25 2.25v1c0 .138-.112.25-.25.25h-1C14.007 16 13 17.007 13 18.25c0 .453.134.875.365 1.228.129.197 0 .522-.235.522H5.25C2.903 20 1 18.097 1 15.75v-6.5c0-.138.112-.25.25-.25h21.5c.138 0 .25.112.25.25v6.5zM18.75 3C21.097 3 23 4.903 23 7.25c0 .138-.112.25-.25.25H1.25c-.138 0-.25-.112-.25-.25C1 4.903 2.903 3 5.25 3h13.5z"
        fill={color}
      />
    </svg>
  );
};

CreditCardAddFilled24.category = 'Money & Shopping';

export default CreditCardAddFilled24;
