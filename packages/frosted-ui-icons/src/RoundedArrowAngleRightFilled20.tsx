import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleRightFilled20"
      {...props}
    >
      <path
        d="M7.5 19C3.91 19 1 16.09 1 12.5S3.91 6 7.5 6h7.232l-2.866-2.866c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0l5 5c.234.235.366.553.366.884 0 .332-.132.65-.366.884l-5 5c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768L14.732 8.5H7.5c-2.21 0-4 1.791-4 4 0 2.21 1.79 4 4 4h1.75c.69 0 1.25.56 1.25 1.25S9.94 19 9.25 19H7.5z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleRightFilled20.category = 'Arrows';

export default RoundedArrowAngleRightFilled20;
