import * as React from 'react';
import { IconProps } from './types';

export const BlankNotePlusFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.25031 0C10.3209 0.000263795 11.9999 1.67901 12 3.74969V7.89779C11.9024 7.85829 11.8008 7.826 11.6963 7.8021C11.4929 6.91332 10.6997 6.24949 9.74921 6.24949C8.79882 6.2496 8.00545 6.91334 7.8021 7.8021C6.91336 8.00549 6.24958 8.79882 6.24949 9.74921C6.24951 10.6996 6.91335 11.4929 7.8021 11.6963C7.82597 11.8006 7.85935 11.9016 7.89877 11.999H3.75067C1.67977 11.999 0.000976741 10.3202 0.000976483 8.24933V3.74969C0.00104249 1.67885 1.67981 0 3.75067 0H8.25031Z"
        fill={color}
      />
      <path
        d="M9.74921 8.24957V9.7494M9.74921 11.2493V9.7494M9.74921 9.7494H8.24933M9.74921 9.7494H11.2491"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

BlankNotePlusFilled12.category = 'Interface General';

export default BlankNotePlusFilled12;
