import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftSmall24"
      {...props}
    >
      <path
        d="M12.552 7.552c.293-.293.293-.768 0-1.061-.293-.293-.768-.293-1.06 0l-4.647 4.646c-.488.489-.488 1.28 0 1.768l4.646 4.647c.293.293.768.293 1.06 0 .294-.293.294-.768 0-1.061l-4.469-4.47 4.47-4.47zm4.75 0c.293-.293.293-.768 0-1.061-.293-.293-.768-.293-1.06 0l-4.647 4.646c-.488.489-.488 1.28 0 1.768l4.646 4.647c.293.293.768.293 1.06 0 .294-.293.294-.768 0-1.061l-4.469-4.47 4.47-4.47z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmall24.category = 'Arrows';

export default DoubleChevronLeftSmall24;
