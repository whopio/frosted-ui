import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmallFilled24"
      {...props}
    >
      <path
        d="M16.118 11.586c.49-.487 1.28-.485 1.768.004.486.489.484 1.28-.004 1.768l-4.647 4.627c-.683.68-1.788.68-2.47 0l-4.647-4.627c-.489-.488-.49-1.279-.004-1.768.487-.489 1.279-.49 1.768-.004L12 15.688l4.118-4.102zm0-5.727c.49-.487 1.28-.485 1.768.004.486.49.485 1.28-.004 1.768l-4.647 4.628c-.683.68-1.788.68-2.47 0L6.117 7.63c-.49-.487-.49-1.279-.004-1.768.487-.489 1.278-.49 1.768-.004L12 9.961l4.118-4.102z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallFilled24.category = 'Arrows';

export default DoubleChevronDownSmallFilled24;
