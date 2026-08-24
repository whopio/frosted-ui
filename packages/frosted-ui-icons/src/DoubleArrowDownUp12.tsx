import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowDownUp12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowDownUp12"
      {...props}
    >
      <path
        d="M6.22 2.47c-.293.293-.293.768 0 1.06.292.293.767.293 1.06 0l.97-.97v8.69c0 .414.336.75.75.75s.75-.336.75-.75V2.56l.97.97c.292.293.767.293 1.06 0 .293-.293.293-.767 0-1.06L9.53.22c-.293-.293-.768-.293-1.06 0L6.22 2.47zm-6 6c-.292.293-.292.767 0 1.06l2.25 2.25c.293.293.768.293 1.061 0l2.25-2.25c.293-.293.293-.767 0-1.06-.293-.293-.768-.293-1.06 0l-.97.97V.75C3.75.336 3.415 0 3 0s-.75.336-.75.75v8.69l-.97-.97c-.293-.293-.767-.293-1.06 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowDownUp12.category = 'Arrows';

export default DoubleArrowDownUp12;
