import * as React from 'react';
import { IconProps } from './types';

export const CircleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z"
        fill={color}
      />
    </svg>
  );
};

CircleFilled20.category = 'Interface General';

export default CircleFilled20;
