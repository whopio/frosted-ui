import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.0005 22L4.00061 14M12.0005 22L20.0006 14M12.0005 22V2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownBold24.category = 'Arrows';

export default ArrowDownBold24;
