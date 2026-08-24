import * as React from 'react';
import { IconProps } from './types';

export const CircleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CircleBoldFilled12"
      {...props}
    >
      <path d="M11.75 6c0 3.176-2.574 5.75-5.75 5.75S.25 9.176.25 6 2.824.25 6 .25 11.75 2.824 11.75 6z" fill={color} />
    </svg>
  );
};

CircleBoldFilled12.category = 'Interface General';

export default CircleBoldFilled12;
