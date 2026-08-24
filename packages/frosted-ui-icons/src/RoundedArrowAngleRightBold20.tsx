import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleRightBold20"
      {...props}
    >
      <path
        d="M7.499 18.998C3.909 18.998 1 16.088 1 12.5 1 8.91 3.91 6 7.499 6h8.337l-3.294-3.294c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0l5 5c.188.188.293.442.293.707 0 .265-.105.52-.293.707l-5 5c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414L15.834 8H7.499C5.014 8 3 10.015 3 12.5c0 2.484 2.014 4.498 4.499 4.498h2c.552 0 1 .448 1 1s-.448 1-1 1h-2z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleRightBold20.category = 'Arrows';

export default RoundedArrowAngleRightBold20;
