import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftSmallBold24"
      {...props}
    >
      <path
        d="M12.479 7.728c.39-.39.39-1.023 0-1.414-.39-.39-1.024-.39-1.414 0l-4.647 4.647c-.585.585-.585 1.535 0 2.12l4.647 4.647c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414l-4.293-4.293 4.293-4.293zm5.25 0c.39-.39.39-1.023 0-1.414-.39-.39-1.024-.39-1.414 0l-4.647 4.647c-.585.585-.585 1.535 0 2.12l4.647 4.647c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414l-4.293-4.293 4.293-4.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallBold24.category = 'Arrows';

export default DoubleChevronLeftSmallBold24;
