import * as React from 'react';
import { IconProps } from './types';

export const Facebook16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.3894 14.4707V10.0374H5.01347V8.00004H6.3894V7.12224C6.3894 4.853 7.41604 3.80226 9.64271 3.80226C10.0642 3.80226 10.792 3.88485 11.0909 3.96745V5.813C10.9334 5.79708 10.6586 5.78893 10.3201 5.78893C9.22677 5.78893 8.80531 6.20226 8.80531 7.27964V8.00004H10.9842L10.6109 10.0371H8.80831V14.6185C12.1092 14.2186 14.6667 11.408 14.6667 8.00004C14.6667 4.31819 11.6819 1.33337 8.00004 1.33337C4.31819 1.33337 1.33337 4.31819 1.33337 8.00004C1.33337 11.1266 3.48546 13.7502 6.3894 14.4707Z"
        stroke={color}
        strokeWidth="1.25"
      />
    </svg>
  );
};

export default Facebook16;
