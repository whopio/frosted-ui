import * as React from 'react';
import { IconProps } from './types';

export const BankBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.69043 0.27727C5.52489 -0.090144 6.47512 -0.0901457 7.30957 0.27727L10.8057 1.81633C11.5312 2.13582 11.9999 2.85369 12 3.64641V4.66204C11.9999 5.28298 11.5747 5.80274 11 5.9511V9.99993L11.1025 10.0048C11.6066 10.0562 12 10.4823 12 10.9999C11.9998 11.552 11.5522 11.9999 11 11.9999H1C0.447849 11.9999 0.000216922 11.552 0 10.9999C0 10.4823 0.393351 10.0562 0.897461 10.0048L1 9.99993V5.9511C0.425321 5.80274 0.000107731 5.28298 0 4.66204V3.64641C0.000138281 2.85369 0.468832 2.13582 1.19434 1.81633L4.69043 0.27727ZM3 5.99602V9.99993H5V5.99602H3ZM7 5.99602V9.99993H9V5.99602H7ZM6.50391 2.10735C6.18296 1.96603 5.81704 1.96604 5.49609 2.10735L2 3.64641V3.99602H10V3.64641L6.50391 2.10735Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BankBold12.category = 'Buildings';

export default BankBold12;
