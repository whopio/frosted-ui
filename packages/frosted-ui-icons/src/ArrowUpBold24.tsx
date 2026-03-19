import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.0005 2L4.00061 10M12.0005 2L20.0006 10M12.0005 2V22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpBold24.category = 'Arrows';

export default ArrowUpBold24;
