import * as React from 'react';
import { IconProps } from './types';

export const BankFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BankFilled12"
      {...props}
    >
      <path
        d="M10.887 10c.614 0 1.112.499 1.113 1.113 0 .49-.397.887-.887.887H.887C.397 12 0 11.603 0 11.113 0 10.5.499 10 1.113 10h9.774zM2.75 5.004c.414 0 .75.336.75.75v2.498c0 .414-.336.75-.75.75h-1c-.414 0-.75-.336-.75-.75V5.754c0-.414.336-.75.75-.75h1zm3.75 0c.414 0 .75.336.75.75v2.498c0 .414-.336.75-.75.75h-1c-.414 0-.75-.336-.75-.75V5.754c0-.414.336-.75.75-.75h1zm3.75 0c.414 0 .75.336.75.75v2.498c0 .414-.336.75-.75.75h-1c-.414 0-.75-.336-.75-.75V5.754c0-.414.336-.75.75-.75h1zM4.71.29c.816-.388 1.763-.388 2.579 0l4.136 1.968c.351.167.575.522.575.911 0 .461-.374.836-.836.836H.836c-.433 0-.79-.33-.832-.751L0 3.17l.01-.145c.048-.33.258-.62.565-.766L4.711.29z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BankFilled12.category = 'Buildings';

export default BankFilled12;
