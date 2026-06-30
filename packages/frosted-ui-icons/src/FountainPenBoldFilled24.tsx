import * as React from 'react';
import { IconProps } from './types';

export const FountainPenBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M18.7715 13.7757L16.6611 19.055C16.203 20.1999 15.1724 21.0177 13.9531 21.2025L2.47461 22.9407L9.48535 15.93C9.64974 15.9737 9.82185 15.9993 10 15.9993C11.1045 15.9993 12 15.1039 12 13.9993C11.9998 12.895 11.1044 11.9994 10 11.9993C8.89558 11.9993 8.00025 12.895 8 13.9993C8 14.1787 8.02507 14.3525 8.06934 14.5179L1.06152 21.5247L2.80078 10.0482C2.98558 8.829 3.80243 7.79825 4.94727 7.34015L10.2246 5.22882L18.7715 13.7757ZM12.7354 2.1673C13.4511 0.855272 15.2264 0.599696 16.2832 1.65656L22.3457 7.71906C23.402 8.77579 23.1465 10.5511 21.835 11.2669L20.0586 12.2347L11.7656 3.94171L12.7354 2.1673Z"
        fill={color}
      />
    </svg>
  );
};

FountainPenBoldFilled24.category = 'Interface General';

export default FountainPenBoldFilled24;
