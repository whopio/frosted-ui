import * as React from 'react';
import { IconProps } from './types';

export const PeoplePlus16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M10 9.3633C9.09448 7.88957 7.49877 6.92845 5.69325 7.00417C3.04294 7.11485 1 9.54387 1 12.3457C1 13.2602 1.70123 14 2.5681 14H9.25521M9 7.83361C9.47341 6.75618 10.5849 6 11.8765 6C13.2504 6 14.4185 6.85008 14.8353 8.03624C14.9434 8.33773 15 8.66392 15 9M13 10V14M11 12H15M8 3C8 4.10457 7.10457 5 6 5C4.89543 5 4 4.10457 4 3C4 1.89543 4.89543 1 6 1C7.10457 1 8 1.89543 8 3ZM13 3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PeoplePlus16;
