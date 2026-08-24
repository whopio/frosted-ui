import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleRightFilled32"
      {...props}
    >
      <path
        d="M11.5 31C5.7 31 1 26.299 1 20.5 1 14.7 5.7 10 11.5 10h15.259l-6.834-6.868c-.487-.49-.485-1.281.004-1.768.489-.487 1.28-.485 1.767.004l8.94 8.982c.485.488.485 1.276 0 1.764l-8.94 8.982c-.487.49-1.278.491-1.767.004-.49-.487-.491-1.278-.004-1.767l6.799-6.833H11.5c-4.418 0-8 3.582-8 8s3.582 8 8 8h3.915c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H11.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRightFilled32.category = 'Arrows';

export default RoundedArrowAngleRightFilled32;
