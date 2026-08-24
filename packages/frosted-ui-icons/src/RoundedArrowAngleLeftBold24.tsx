import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleLeftBold24"
      {...props}
    >
      <path
        d="M14.993 22.998c4.418 0 8-3.582 8-8 0-4.417-3.582-7.998-8-7.998H4.39l4.293-4.293c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0L1.292 7.268c-.39.39-.39 1.024 0 1.414l6.024 6.025c.391.39 1.024.39 1.415 0 .39-.39.39-1.024 0-1.414L4.439 9h10.554c3.313 0 6 2.686 6 5.999 0 3.313-2.687 5.999-6 5.999H12.91c-.552 0-1 .448-1 1s.448 1 1 1h2.083z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeftBold24.category = 'Arrows';

export default RoundedArrowAngleLeftBold24;
