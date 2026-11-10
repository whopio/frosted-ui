import * as React from 'react';
import { IconProps } from './types';

export const Pin16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pin16"
      {...props}
    >
      <path
        d="M9.95 1C11.082 1 12 1.918 12 3.05v3.03c0 .143.038.285.11.41l1.41 2.433C14.31 10.29 13.324 12 11.745 12H8.75v2.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V12H4.255c-1.58 0-2.566-1.71-1.775-3.077l1.41-2.434c.072-.124.11-.266.11-.41V3.05C4 1.919 4.918 1 6.05 1h3.9zm-3.9 1.5c-.304 0-.55.246-.55.55v3.03c0 .407-.108.807-.313 1.16L3.779 9.675c-.211.366.053.825.477.825h7.49c.424 0 .688-.459.477-.825l-1.41-2.435c-.204-.353-.312-.753-.312-1.16V3.05c0-.304-.246-.55-.55-.55h-3.9z"
        fill={color}
      />
    </svg>
  );
};

Pin16.category = 'Interface General';

export default Pin16;
