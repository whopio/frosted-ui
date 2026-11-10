import * as React from 'react';
import { IconProps } from './types';

export const DiscountTagBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DiscountTagBoldFilled12"
      {...props}
    >
      <path
        d="M10.285 0c1.495 0 2.707 1.212 2.707 2.707v2.991c0 .933-.371 1.829-1.031 2.489l-3.86 3.86c-1.269 1.268-3.325 1.268-4.594 0L.952 9.492c-1.269-1.27-1.269-3.326 0-4.594L4.817 1.03C5.477.371 6.373 0 7.307 0h2.978zm-3.76 3.796c-.598 0-1.083.484-1.083 1.083v3.248c0 .598.485 1.083 1.083 1.083s1.083-.485 1.083-1.083V4.878c0-.597-.485-1.082-1.083-1.082zM4.36 5.556c-.523 0-.947.424-.947.947 0 .523.424.947.947.947.523 0 .948-.424.948-.947 0-.523-.425-.947-.948-.948zm4.332 0c-.523 0-.948.424-.948.947 0 .523.425.947.948.947.523 0 .947-.424.948-.947 0-.523-.425-.947-.948-.948z"
        fill={color}
      />
    </svg>
  );
};

DiscountTagBoldFilled12.category = 'Money & Shopping';

export default DiscountTagBoldFilled12;
