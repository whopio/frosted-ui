import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowRightLeftBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.93896 8.43742C4.52466 7.85172 5.47425 7.8519 6.06006 8.43742C6.62648 9.00386 6.64375 9.90906 6.11475 10.498H13.4995C14.3279 10.498 14.9995 11.1696 14.9995 11.998C14.9995 12.8264 14.3279 13.498 13.4995 13.498H6.11475C6.64554 14.0868 6.62907 14.9934 6.06201 15.5605C5.47624 16.146 4.52664 16.1461 3.94092 15.5605L1.43896 13.0585C0.853509 12.4728 0.853488 11.5231 1.43896 10.9374L3.93896 8.43742ZM9.93896 0.439377C10.5247 -0.146334 11.4743 -0.146259 12.0601 0.439377L14.564 2.94328C15.1497 3.52906 15.1497 4.47859 14.564 5.06438L12.0601 7.56828C11.4743 8.15374 10.5246 8.15395 9.93896 7.56828C9.37165 7.00078 9.35521 6.0926 9.88721 5.50383H2.49951C1.67138 5.50357 0.999639 4.83199 0.999512 4.00383C0.999516 3.17556 1.67131 2.50409 2.49951 2.50383H9.88721C9.35511 1.91512 9.37175 1.00695 9.93896 0.439377Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowRightLeftBoldFilled16.category = 'Arrows';

export default DoubleArrowRightLeftBoldFilled16;
