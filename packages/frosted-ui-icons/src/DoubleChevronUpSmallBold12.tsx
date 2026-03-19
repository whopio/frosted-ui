import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.89348 5.45303C8.28402 5.84332 8.91709 5.84347 9.30754 5.45303C9.69759 5.06255 9.6977 4.42937 9.30754 4.03896L6.88371 1.61611C6.39566 1.12808 5.60431 1.12827 5.11614 1.61611L2.69328 4.03896C2.30276 4.42949 2.30276 5.0625 2.69328 5.45303C3.08382 5.84341 3.71687 5.8435 4.10735 5.45303L5.99992 3.56045L7.89348 5.45303ZM7.89348 10.453C8.28402 10.8433 8.91709 10.8435 9.30754 10.453C9.69759 10.0625 9.6977 9.42937 9.30754 9.03896L6.88371 6.61611C6.39566 6.12808 5.60431 6.12827 5.11614 6.61611L2.69328 9.03896C2.30276 9.42949 2.30276 10.0625 2.69328 10.453C3.08382 10.8434 3.71687 10.8435 4.10735 10.453L5.99992 8.56045L7.89348 10.453Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallBold12.category = 'Arrows';

export default DoubleChevronUpSmallBold12;
