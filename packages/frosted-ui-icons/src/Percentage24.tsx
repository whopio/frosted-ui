import * as React from 'react';
import { IconProps } from './types';

export const Percentage24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Percentage24"
      {...props}
    >
      <path
        d="M18.999 15c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm2.718-13.78c.293-.293.768-.293 1.06 0 .293.293.293.767 0 1.06L2.28 22.778c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06L21.717 1.22zM18.999 16.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM5 1c2.209 0 4 1.791 4 4S7.209 9 5 9C2.79 9 1 7.21 1 5c0-2.209 1.79-4 4-4zm0 1.5C3.62 2.5 2.5 3.62 2.5 5S3.62 7.5 5 7.5 7.5 6.38 7.5 5 6.38 2.5 5 2.5z"
        fill={color}
      />
    </svg>
  );
};

Percentage24.category = 'Money & Shopping';

export default Percentage24;
