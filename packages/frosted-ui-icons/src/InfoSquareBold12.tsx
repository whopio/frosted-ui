import * as React from 'react';
import { IconProps } from './types';

export const InfoSquareBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoSquareBold12"
      {...props}
    >
      <path
        d="M8 0c2.21 0 4 1.79 4 4v4c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h4zM4 2c-1.105 0-2 .895-2 2v4c0 1.105.895 2 2 2h4c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2H4zm2 3.5c.552 0 1 .448 1 1V8c0 .552-.448 1-1 1s-1-.448-1-1V6.5c0-.552.448-1 1-1zM6 3c.497 0 .9.403.9.9s-.403.9-.9.9-.9-.403-.9-.9.403-.9.9-.9z"
        fill={color}
      />
    </svg>
  );
};

InfoSquareBold12.category = 'Interface General';

export default InfoSquareBold12;
