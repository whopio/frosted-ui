import * as React from 'react';
import { IconProps } from './types';

export const DiscountTagFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DiscountTagFilled20"
      {...props}
    >
      <path
        d="M15.501.998c1.933 0 3.5 1.567 3.5 3.5v4.924c0 1.26-.5 2.467-1.391 3.358l-4.979 4.979c-1.66 1.66-4.35 1.66-6.01 0l-4.38-4.38c-1.66-1.66-1.66-4.352 0-6.011l4.98-4.979C8.11 1.5 9.318.998 10.577.998h4.923zM10.496 4.75c-.414 0-.75.336-.75.75v8c0 .414.336.75.75.75.415 0 .75-.336.75-.75v-8c0-.414-.335-.75-.75-.75zM6.996 8c-.828 0-1.5.671-1.5 1.5 0 .828.672 1.5 1.5 1.5.829 0 1.5-.672 1.5-1.5S7.826 8 6.997 8zm7 0c-.828 0-1.5.671-1.5 1.5 0 .828.672 1.5 1.5 1.5.829 0 1.5-.672 1.5-1.5s-.671-1.5-1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

DiscountTagFilled20.category = 'Money & Shopping';

export default DiscountTagFilled20;
