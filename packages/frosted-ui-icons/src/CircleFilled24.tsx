import * as React from 'react';
import { IconProps } from './types';

export const CircleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CircleFilled24"
      {...props}
    >
      <path d="M23.5 12c0 6.351-5.149 11.5-11.5 11.5S.5 18.351.5 12 5.649.5 12 .5 23.5 5.649 23.5 12z" fill={color} />
    </svg>
  );
};

CircleFilled24.category = 'Interface General';

export default CircleFilled24;
