import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleRightBold24"
      {...props}
    >
      <path
        d="M2 3.75c-.552 0-1 .448-1 1v8.625c0 1.588 1.287 2.875 2.875 2.875h15.61l-2.671 2.523c-.402.38-.42 1.012-.04 1.413.379.402 1.011.42 1.412.04l4.5-4.25c.2-.188.314-.451.314-.726 0-.275-.114-.538-.314-.727l-4.5-4.25c-.4-.379-1.033-.36-1.413.04-.379.402-.36 1.034.04 1.414l2.672 2.523H3.875c-.483 0-.875-.392-.875-.875V4.75c0-.552-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleRightBold24.category = 'Arrows';

export default ArrowDownAngleRightBold24;
