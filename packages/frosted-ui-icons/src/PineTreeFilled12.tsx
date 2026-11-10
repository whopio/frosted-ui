import * as React from 'react';
import { IconProps } from './types';

export const PineTreeFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PineTreeFilled12"
      {...props}
    >
      <path
        d="M5.316.29c.371-.385.995-.385 1.366 0l.075.088 3.097 4.1C10.327 5.102 9.881 6 9.097 6h-.114l1.834 2.486c.463.627.015 1.513-.764 1.513H6.749v1.25c0 .415-.336.75-.75.75s-.75-.335-.75-.75V10H1.945c-.779 0-1.227-.886-.764-1.513L3.015 6H2.9c-.784-.001-1.23-.897-.757-1.523L5.24.378 5.316.29z"
        fill={color}
      />
    </svg>
  );
};

PineTreeFilled12.category = 'Nature & Weather';

export default PineTreeFilled12;
