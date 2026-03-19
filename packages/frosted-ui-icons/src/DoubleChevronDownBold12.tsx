import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.54302 5.89262C9.93352 5.50232 10.5666 5.50228 10.9571 5.89262C11.3475 6.28309 11.3474 6.91615 10.9571 7.30669L6.88384 11.3799C6.39568 11.8681 5.60441 11.8681 5.11626 11.3799L1.04302 7.30669C0.652599 6.91615 0.652527 6.28311 1.04302 5.89262C1.43352 5.50232 2.06661 5.50227 2.45708 5.89262L6.00005 9.43559L9.54302 5.89262ZM9.54302 0.543015C9.93354 0.152493 10.5666 0.152499 10.9571 0.543015C11.3475 0.933546 11.3476 1.56658 10.9571 1.95708L6.88384 6.03032C6.39571 6.51843 5.60441 6.51838 5.11626 6.03032L1.04302 1.95708C0.652491 1.56655 0.652491 0.93354 1.04302 0.543015C1.43354 0.152491 2.06655 0.152491 2.45708 0.543015L6.00005 4.08598L9.54302 0.543015Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownBold12.category = 'Arrows';

export default DoubleChevronDownBold12;
