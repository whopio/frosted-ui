import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleRightBold24"
      {...props}
    >
      <path
        d="M8.998 22.998c-4.418 0-7.999-3.582-7.999-8C.999 10.582 4.581 7 8.998 7h10.604l-4.293-4.293c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0l5.976 5.975c.39.39.39 1.024 0 1.414l-6.024 6.025c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L19.553 9H8.998c-3.313 0-5.999 2.686-5.999 5.999 0 3.313 2.686 5.998 5.999 5.999h2.083c.552 0 1 .448 1 1s-.448 1-1 1H8.998z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleRightBold24.category = 'Arrows';

export default RoundedArrowAngleRightBold24;
