import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.29281 3.54256C8.68328 3.15237 9.31642 3.15234 9.70687 3.54256C10.0973 3.933 10.0971 4.56609 9.70687 4.95663L5.70687 8.95663C5.31636 9.34713 4.68334 9.3471 4.29281 8.95663L2.29281 6.95663C1.90245 6.56609 1.90234 5.93303 2.29281 5.54256C2.6833 5.15234 3.31641 5.15229 3.70687 5.54256L4.99984 6.83553L8.29281 3.54256Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBold12.category = 'Checkmarks';

export default CheckmarkSmallBold12;
