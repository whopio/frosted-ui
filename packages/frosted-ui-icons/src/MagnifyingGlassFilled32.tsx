import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.5 1.00098C20.4034 1.00117 26 6.59754 26 13.501C25.9999 16.5012 24.9417 19.2538 23.1797 21.4082L30.6357 28.8643C31.1237 29.3524 31.1237 30.1437 30.6357 30.6318C30.1476 31.1199 29.3563 31.1198 28.8682 30.6318L21.4121 23.1758C19.257 24.9404 16.5027 26.0009 13.5 26.001C6.59656 26.001 1.0002 20.4044 1 13.501C1 6.59742 6.59644 1.00098 13.5 1.00098ZM13.5 3.50098C7.97715 3.50098 3.5 7.97813 3.5 13.501C3.5002 19.0237 7.97727 23.501 13.5 23.501C19.0226 23.5008 23.4998 19.0235 23.5 13.501C23.5 7.97825 19.0227 3.50117 13.5 3.50098Z"
        fill={color}
      />
    </svg>
  );
};

MagnifyingGlassFilled32.category = 'Interface General';

export default MagnifyingGlassFilled32;
