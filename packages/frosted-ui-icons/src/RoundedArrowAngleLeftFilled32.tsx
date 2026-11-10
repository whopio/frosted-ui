import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleLeftFilled32"
      {...props}
    >
      <path
        d="M20.5 31C26.299 31 31 26.299 31 20.5 31 14.7 26.297 10 20.5 10H5.24l6.835-6.868c.486-.49.485-1.281-.004-1.768-.49-.487-1.28-.485-1.768.004l-8.94 8.982c-.484.488-.484 1.276 0 1.764l8.94 8.982c.487.49 1.279.491 1.768.004.489-.487.49-1.278.004-1.767l-6.8-6.833H20.5c4.419 0 8 3.582 8 8s-3.581 8-8 8h-3.915c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25H20.5z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleLeftFilled32.category = 'Arrows';

export default RoundedArrowAngleLeftFilled32;
