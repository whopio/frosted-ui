import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.6161 4.36551C12.1042 3.87786 12.8956 3.87781 13.3836 4.36551C13.8717 4.85354 13.8714 5.64491 13.3836 6.13309L7.38365 12.1331C6.89549 12.6212 6.10325 12.6212 5.61509 12.1331L2.61607 9.13407C2.12795 8.64594 2.12801 7.85465 2.61607 7.36649C3.10423 6.87833 3.89549 6.87833 4.38365 7.36649L6.49986 9.48172L11.6161 4.36551Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallFilled16.category = 'Checkmarks';

export default CheckmarkSmallFilled16;
