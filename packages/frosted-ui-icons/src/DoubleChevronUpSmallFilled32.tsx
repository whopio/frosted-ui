import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmallFilled32"
      {...props}
    >
      <path
        d="M21.701 16.91c.49.487 1.28.485 1.768-.004.486-.49.485-1.28-.004-1.767l-6.113-6.086c-.747-.745-1.957-.745-2.705 0l-6.112 6.086c-.49.487-.49 1.278-.004 1.767.487.49 1.278.491 1.768.004l5.7-5.676 5.702 5.676zm0 6.256c.49.487 1.28.485 1.768-.004.487-.49.485-1.28-.004-1.768l-6.113-6.085c-.747-.745-1.957-.745-2.705 0l-6.112 6.085c-.49.488-.49 1.279-.004 1.768.487.49 1.279.491 1.768.004l5.7-5.676 5.702 5.676z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallFilled32.category = 'Arrows';

export default DoubleChevronUpSmallFilled32;
