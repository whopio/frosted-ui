import * as React from 'react';
import { IconProps } from './types';

export const Circle32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1.00024C24.2842 1.00038 31 7.71605 31 16.0002C30.9999 24.2843 24.2841 31.0001 16 31.0002C7.71581 31.0002 1.00013 24.2844 1 16.0002C1 7.71597 7.71573 1.00024 16 1.00024ZM16 2.50024C8.54416 2.50024 2.5 8.5444 2.5 16.0002C2.50013 23.456 8.54424 29.5002 16 29.5002C23.4557 29.5001 29.4999 23.4559 29.5 16.0002C29.5 8.54448 23.4557 2.50038 16 2.50024Z"
        fill={color}
      />
    </svg>
  );
};

export default Circle32;
