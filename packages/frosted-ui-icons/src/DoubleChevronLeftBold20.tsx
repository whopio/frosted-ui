import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftBold20"
      {...props}
    >
      <path
        d="M11.534 2.685c.39-.39.39-1.024 0-1.414-.39-.39-1.023-.39-1.414 0L2.46 8.93c-.578.579-.578 1.515 0 2.093l7.66 7.66c.39.391 1.024.391 1.414 0 .39-.39.39-1.023 0-1.413L4.241 9.978l7.293-7.293zm6.147 0c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0L8.606 8.93c-.578.579-.578 1.515 0 2.093l7.66 7.66c.391.391 1.024.391 1.415 0 .39-.39.39-1.023 0-1.413l-7.293-7.293 7.293-7.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftBold20.category = 'Arrows';

export default DoubleChevronLeftBold20;
