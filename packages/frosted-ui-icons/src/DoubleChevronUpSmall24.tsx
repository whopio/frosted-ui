import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmall24"
      {...props}
    >
      <path
        d="M16.47 12.573c.293.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-4.646-4.647c-.488-.488-1.28-.488-1.768 0L6.47 11.512c-.293.293-.293.768 0 1.06.293.294.767.294 1.06 0L12 8.104l4.47 4.47zm0 4.75c.293.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-4.646-4.647c-.488-.488-1.28-.488-1.768 0L6.47 16.262c-.293.293-.293.768 0 1.06.293.294.767.294 1.06 0L12 12.854l4.47 4.47z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmall24.category = 'Arrows';

export default DoubleChevronUpSmall24;
