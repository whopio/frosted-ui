import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsHorizontalBoldFilled12"
      {...props}
    >
      <path
        d="M1.75 4.25c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75S0 6.966 0 6s.784-1.75 1.75-1.75zm4.25 0c.966 0 1.75.784 1.75 1.75S6.966 7.75 6 7.75 4.25 6.966 4.25 6 5.034 4.25 6 4.25zm4.25 0c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75S8.5 6.966 8.5 6s.784-1.75 1.75-1.75z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontalBoldFilled12.category = 'Interface General';

export default ThreeDotsHorizontalBoldFilled12;
