import * as React from 'react';
import { IconProps } from './types';

export const ShieldUserBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldUserBoldFilled24"
      {...props}
    >
      <path
        d="M12.044 0c.37-.005.74.057 1.092.188l7.909 2.949c1.176.439 1.957 1.563 1.957 2.818v7.2c0 3.24-2.462 5.818-4.765 7.548-2.36 1.774-4.88 2.904-5.576 3.202-.187.08-.383.115-.579.114-.22.013-.44-.024-.65-.112-.699-.296-3.24-1.424-5.621-3.199C3.488 18.98 1 16.401 1 13.156V5.959c0-1.258.784-2.384 1.965-2.82L10.957.185c.35-.13.719-.19 1.087-.185zm-.042 14.017c-2.456 0-5.051 1.168-6.068 4.222.34.297.698.587 1.07.865 1.998 1.488 4.144 2.495 4.996 2.868.852-.373 2.998-1.38 4.995-2.868.373-.278.731-.569 1.071-.866-1.017-3.052-3.609-4.22-6.064-4.221zm0-8.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5z"
        fill={color}
      />
    </svg>
  );
};

ShieldUserBoldFilled24.category = 'Security';

export default ShieldUserBoldFilled24;
