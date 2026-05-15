import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14.9365 1.3997C15.697 1.10766 16.5393 1.11063 17.2979 1.40751L26.9248 5.17607C28.1763 5.66622 28.9999 6.87305 29 8.21708V17.5227C28.9999 21.3459 26.1973 24.5044 23.4023 26.7249C20.57 28.9749 17.5325 30.4317 16.6641 30.8274C16.3136 30.9871 15.9255 30.9887 15.5732 30.8313C14.6955 30.4391 11.6001 28.9835 8.71191 26.7337C5.86435 24.5155 3.00013 21.3552 3 17.5227V8.2288C3.00017 6.87705 3.83288 5.66475 5.09473 5.17997L14.9365 1.3997ZM16.75 29.1214C17.9999 28.506 20.3059 27.2691 22.4697 25.5501C25.2001 23.381 27.4999 20.6127 27.5 17.5227V8.21708C27.4999 7.49038 27.0546 6.8376 26.3779 6.57255L16.75 2.80302V29.1214Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldHalfFilled32.category = 'Security';

export default ShieldHalfFilled32;
