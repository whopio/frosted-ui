import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.9998 7H13.2019C14.3817 7 14.9873 8.41327 14.1736 9.26758L9.21952 14.4697C8.55599 15.1664 7.4436 15.1664 6.78007 14.4697L1.82597 9.26758C1.01234 8.41327 1.61789 7 2.79765 7H3.99979V2.85449C3.99988 1.83032 4.83012 1.00009 5.85429 1H10.1453C11.1695 1.00009 11.9997 1.83032 11.9998 2.85449V7Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatDownBoldFilled16.category = 'Arrows';

export default ArrowFatDownBoldFilled16;
