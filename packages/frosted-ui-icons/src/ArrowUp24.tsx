import * as React from 'react';
import { IconProps } from './types';

export const ArrowUp24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.0005 1.75L3.75037 10M12.0005 1.75L20.2504 10M12.0005 1.75V22.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUp24.category = 'Arrows';

export default ArrowUp24;
