import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmall32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftSmall32"
      {...props}
    >
      <path
        d="M17.06 9.95c.292-.294.291-.769-.002-1.061-.293-.292-.768-.291-1.06.002L9.91 15.003c-.55.553-.55 1.448 0 2l6.088 6.113c.292.293.767.294 1.06.002.293-.293.294-.768.002-1.061l-6.03-6.054 6.03-6.053zm5.225 0c.292-.294.291-.769-.002-1.061-.294-.292-.768-.291-1.06.002l-6.089 6.112c-.55.553-.55 1.448 0 2l6.088 6.113c.293.293.767.294 1.06.002.294-.293.295-.768.003-1.061l-6.03-6.054 6.03-6.053z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmall32.category = 'Arrows';

export default DoubleChevronLeftSmall32;
