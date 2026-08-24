import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontal24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsHorizontal24"
      {...props}
    >
      <path
        d="M4.25 10.25c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75S2.5 12.966 2.5 12s.784-1.75 1.75-1.75zm7.75 0c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75.784-1.75 1.75-1.75zm7.75 0c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75S18 12.966 18 12s.784-1.75 1.75-1.75z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontal24.category = 'Interface General';

export default ThreeDotsHorizontal24;
