import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsHorizontalBold12"
      {...props}
    >
      <path
        d="M1.5 4.5C2.328 4.5 3 5.172 3 6s-.672 1.5-1.5 1.5S0 6.828 0 6s.672-1.5 1.5-1.5zm4.5 0c.828 0 1.5.672 1.5 1.5S6.828 7.5 6 7.5 4.5 6.828 4.5 6 5.172 4.5 6 4.5zm4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S9 6.828 9 6s.672-1.5 1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontalBold12.category = 'Interface General';

export default ThreeDotsHorizontalBold12;
