import * as React from 'react';
import { IconProps } from './types';

export const DiscountTagFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DiscountTagFilled12"
      {...props}
    >
      <path
        d="M9.746 0c1.242 0 2.25 1.008 2.25 2.25v3c0 .795-.317 1.559-.88 2.121l-3.824 3.823c-1.074 1.074-2.815 1.074-3.889 0L.805 8.596c-1.073-1.074-1.073-2.815 0-3.888l3.83-3.83C5.197.317 5.96 0 6.755 0h2.99zM6.25 3.25c-.414 0-.75.336-.75.75v3.5c0 .415.336.75.75.75S7 7.914 7 7.5V4c0-.413-.336-.75-.75-.75zM4.25 5c-.414 0-.75.336-.75.75 0 .415.336.75.75.75S5 6.165 5 5.75C5 5.337 4.664 5 4.25 5zm4 0c-.414 0-.75.336-.75.75 0 .415.336.75.75.75S9 6.165 9 5.75C9 5.337 8.664 5 8.25 5z"
        fill={color}
      />
    </svg>
  );
};

DiscountTagFilled12.category = 'Money & Shopping';

export default DiscountTagFilled12;
