import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoCircleBold12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 2C3.79 2 2 3.79 2 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 3.5c.552 0 1 .448 1 1V8c0 .552-.448 1-1 1s-1-.448-1-1V6.5c0-.552.448-1 1-1zM6 3c.497 0 .9.403.9.9s-.403.9-.9.9-.9-.403-.9-.9.403-.9.9-.9z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBold12.category = 'Interface General';

export default InfoCircleBold12;
