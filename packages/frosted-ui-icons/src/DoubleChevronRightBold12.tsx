import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.89458 2.45512C5.50428 2.06462 5.50423 1.43153 5.89458 1.04106C6.28504 0.650597 6.9181 0.650719 7.30864 1.04106L11.3819 5.1143C11.87 5.60246 11.87 6.39373 11.3819 6.88188L7.30864 10.9551C6.91811 11.3455 6.28507 11.3456 5.89458 10.9551C5.50427 10.5646 5.50422 9.93153 5.89458 9.54106L9.43755 5.99809L5.89458 2.45512ZM0.544968 2.45512C0.154447 2.0646 0.154452 1.43159 0.544968 1.04106C0.935499 0.650611 1.56853 0.65056 1.95903 1.04106L6.03227 5.1143C6.52038 5.60243 6.52034 6.39372 6.03227 6.88188L1.95903 10.9551C1.56851 11.3456 0.935493 11.3456 0.544968 10.9551C0.154444 10.5646 0.154444 9.93158 0.544968 9.54106L4.08794 5.99809L0.544968 2.45512Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBold12.category = 'Arrows';

export default DoubleChevronRightBold12;
