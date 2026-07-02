import * as React from 'react';
import { IconProps } from './types';

export const BlankNotePlus12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.25031 0C10.3209 0.000263795 11.9999 1.67901 12 3.74969V5.99951C12 6.41353 11.664 6.74919 11.2501 6.74945C10.8359 6.74945 10.5001 6.41369 10.5001 5.99951V3.74969C10.5001 2.50737 9.49258 1.50014 8.25031 1.49988H3.75067C2.50817 1.49988 1.50092 2.50721 1.50085 3.74969V8.24933C1.50085 9.49187 2.50813 10.4991 3.75067 10.4991H6.00049C6.4144 10.4994 6.75036 10.8351 6.75043 11.2491C6.75043 11.6631 6.41444 11.9988 6.00049 11.999H3.75067C1.67977 11.999 0.000976483 10.3202 0.000976483 8.24933V3.74969C0.00104249 1.67885 1.67981 1.28838e-07 3.75067 0H8.25031Z"
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

BlankNotePlus12.category = 'Interface General';

export default BlankNotePlus12;
