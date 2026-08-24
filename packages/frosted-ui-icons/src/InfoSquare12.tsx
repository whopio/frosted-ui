import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoSquare12"
      {...props}
    >
      <path
        d="M8.25 0C10.321 0 12 1.679 12 3.75v4.5C12 10.321 10.321 12 8.25 12h-4.5C1.679 12 0 10.321 0 8.25v-4.5C0 1.679 1.679 0 3.75 0h4.5zm-4.5 1.5C2.507 1.5 1.5 2.507 1.5 3.75v4.5c0 1.243 1.007 2.25 2.25 2.25h4.5c1.243 0 2.25-1.007 2.25-2.25v-4.5c0-1.243-1.007-2.25-2.25-2.25h-4.5zM6 5.5c.414 0 .75.336.75.75v2c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2c0-.414.336-.75.75-.75zm0-2.75c.497 0 .9.403.9.9s-.403.9-.9.9-.9-.403-.9-.9.403-.9.9-.9z"
        fill={color}
      />
    </svg>
  );
};

InfoSquare12.category = 'Interface General';

export default InfoSquare12;
