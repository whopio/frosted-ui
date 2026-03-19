import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.269 3.31012C19.8547 2.72433 19.8548 1.77476 19.269 1.18903C18.6833 0.603456 17.7337 0.603456 17.1479 1.18903L3.97998 14.357C3.06989 15.2671 3.06986 16.7429 3.97998 17.6529L17.1479 30.817C17.7338 31.4026 18.6833 31.4027 19.269 30.817C19.8547 30.2311 19.8547 29.2816 19.269 28.6959L6.57471 16.0054L19.269 3.31012ZM28.269 3.31012C28.8547 2.72433 28.8548 1.77476 28.269 1.18903C27.6833 0.603456 26.7337 0.603456 26.1479 1.18903L12.98 14.357C12.0699 15.2671 12.0699 16.7429 12.98 17.6529L26.1479 30.817C26.7338 31.4026 27.6833 31.4026 28.269 30.817C28.8547 30.2311 28.8547 29.2816 28.269 28.6959L15.5747 16.0054L28.269 3.31012Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeftBoldFilled32.category = 'Arrows';

export default DoubleChevronLeftBoldFilled32;
