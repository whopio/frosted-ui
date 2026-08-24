import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleRightBold16"
      {...props}
    >
      <path
        d="M6.002 15C3.239 15 1 12.76 1 9.998c0-2.763 2.24-5.002 5.002-5.002h5.578l-2.289-2.29c-.39-.39-.39-1.023 0-1.413.39-.39 1.024-.39 1.414 0l4.002 4.002c.188.187.293.442.293.707 0 .265-.105.52-.293.707l-4.002 4.002c-.39.39-1.023.39-1.414 0-.39-.39-.39-1.024 0-1.414l2.3-2.301H6.003C4.344 6.996 3 8.34 3 9.998 3 11.656 4.344 13 6.002 13h1.245c.552 0 1 .448 1 1s-.448 1-1 1H6.002z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleRightBold16.category = 'Arrows';

export default RoundedArrowAngleRightBold16;
