import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightSmallFilled12"
      {...props}
    >
      <path
        d="M6.368 4.282c-.487-.489-.488-1.28 0-1.768.489-.488 1.28-.488 1.768 0l2.423 2.423c.586.586.585 1.536 0 2.122L8.136 9.482c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768l1.716-1.716-1.716-1.716zm-5 0c-.487-.489-.488-1.28 0-1.768.489-.488 1.28-.488 1.768 0L5.56 4.937c.586.586.585 1.536 0 2.122L3.136 9.482c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768l1.716-1.716-1.716-1.716z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallFilled12.category = 'Arrows';

export default DoubleChevronRightSmallFilled12;
