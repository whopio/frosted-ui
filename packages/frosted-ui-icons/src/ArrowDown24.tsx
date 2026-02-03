import * as React from 'react';
import { IconProps } from './types';

export const ArrowDown24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 3C12.4142 3.00006 12.75 3.33583 12.75 3.75V18.3877L17.709 13.2305C17.996 12.9321 18.471 12.9223 18.7695 13.209C19.0679 13.496 19.0777 13.9709 18.791 14.2695L12.541 20.7695C12.3996 20.9166 12.204 21 12 21C11.796 21 11.6004 20.9166 11.459 20.7695L5.20898 14.2695C4.92223 13.9709 4.93201 13.496 5.23047 13.209C5.52907 12.9223 6.00405 12.932 6.29102 13.2305L11.25 18.3877V3.75C11.25 3.33579 11.5858 3 12 3Z"
        fill={color}
      />
    </svg>
  );
};

ArrowDown24.category = 'Arrows';

export default ArrowDown24;
