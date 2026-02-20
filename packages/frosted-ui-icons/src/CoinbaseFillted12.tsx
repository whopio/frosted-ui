import * as React from 'react';
import { IconProps } from './types';

export const CoinbaseFillted12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2.5C4.067 2.5 2.5 4.067 2.5 6C2.5 7.933 4.067 9.5 6 9.5C7.48517 9.5 8.75211 8.57488 9.26074 7.27246C9.41129 6.88667 9.22073 6.45241 8.83496 6.30176C8.44918 6.15124 8.01491 6.34178 7.86426 6.72754C7.57277 7.47369 6.84673 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C6.84673 4 7.57277 4.52631 7.86426 5.27246C8.01491 5.65822 8.44918 5.84876 8.83496 5.69824C9.22073 5.54759 9.41129 5.11333 9.26074 4.72754C8.75211 3.42512 7.48517 2.5 6 2.5Z"
        fill={color}
      />
    </svg>
  );
};

CoinbaseFillted12.category = 'Interface General';

export default CoinbaseFillted12;
