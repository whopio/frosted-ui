import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStackBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardStackBold12"
      {...props}
    >
      <path
        d="M7.25 1C8.493 1 9.5 2.008 9.5 3.25l.23.011c1.135.116 2.02 1.075 2.02 2.24v3c0 1.242-1.008 2.25-2.25 2.25h-5c-1.165 0-2.123-.886-2.238-2.021L2.25 8.5l-.23-.011C.885 8.373 0 7.415 0 6.25v-3C0 2.008 1.007 1 2.25 1h5zm-3.5 7.5c0 .414.336.75.75.75h5c.414 0 .75-.336.75-.75V7.25h-6.5V8.5zm-1.5-6c-.414 0-.75.336-.75.75v3c0 .388.295.708.673.747L2.25 7V5.5c0-1.242 1.007-2.25 2.25-2.25H8c0-.414-.336-.75-.75-.75h-5zM4.5 4.75c-.414 0-.75.336-.75.75v.25h6.5V5.5c0-.414-.336-.75-.75-.75h-5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CreditCardStackBold12.category = 'Money & Shopping';

export default CreditCardStackBold12;
