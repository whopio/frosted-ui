import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleLeftBoldFilled32"
      {...props}
    >
      <path
        d="M29.5 4.25c.828 0 1.5.672 1.5 1.5V17.5c0 2.21-1.791 4-4 4H6.224l3.816 3.669c.596.574.615 1.524.04 2.121-.574.597-1.524.615-2.12.041l-6.5-6.25C1.165 20.798 1 20.408 1 20c0-.408.166-.798.46-1.081l6.5-6.25c.596-.574 1.546-.556 2.12.041.575.597.556 1.547-.04 2.121L6.224 18.5H27c.552 0 1-.448 1-1V5.75c0-.828.671-1.5 1.5-1.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleLeftBoldFilled32.category = 'Arrows';

export default ArrowDownAngleLeftBoldFilled32;
