import * as React from 'react';
import { IconProps } from './types';

export const Mail16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.5 2C13.433 2 15 3.567 15 5.5V10.5C15 12.433 13.433 14 11.5 14H4.5C2.567 14 1 12.433 1 10.5V5.5C1 3.567 2.567 2 4.5 2H11.5ZM8.8623 8.84863C8.31217 9.08964 7.68582 9.08982 7.13574 8.84863L2.5 6.81543V10.5C2.5 11.6046 3.39543 12.5 4.5 12.5H11.5C12.6046 12.5 13.5 11.6046 13.5 10.5V6.81445L8.8623 8.84863ZM4.5 3.5C3.50119 3.5 2.67573 4.23254 2.52637 5.18945L7.73828 7.47461C7.90455 7.54751 8.09445 7.54743 8.26074 7.47461L13.4727 5.18945C13.3232 4.23261 12.4988 3.5 11.5 3.5H4.5Z"
        fill={color}
      />
    </svg>
  );
};

Mail16.category = 'Communication';

export default Mail16;
