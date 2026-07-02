import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.9998 9H13.2019C14.3817 9 14.9873 7.58673 14.1736 6.73242L9.21952 1.53027C8.55599 0.833563 7.4436 0.83356 6.78007 1.53027L1.82597 6.73242C1.01234 7.58673 1.61789 9 2.79765 9H3.99979V13.1455C3.99988 14.1697 4.83012 14.9999 5.85429 15H10.1453C11.1695 14.9999 11.9997 14.1697 11.9998 13.1455V9Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatUpBoldFilled16.category = 'Arrows';

export default ArrowFatUpBoldFilled16;
