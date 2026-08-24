import * as React from 'react';
import { IconProps } from './types';

export const InfoSquareBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoSquareBoldFilled12"
      {...props}
    >
      <path
        d="M8 0c2.21 0 4 1.79 4 4v4c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h4zM6 5.5c-.552 0-1 .448-1 1V8c0 .552.448 1 1 1s1-.448 1-1V6.5c0-.552-.448-1-1-1zM6 3c-.497 0-.9.403-.9.9s.403.9.9.9.9-.403.9-.9S6.497 3 6 3z"
        fill={color}
      />
    </svg>
  );
};

InfoSquareBoldFilled12.category = 'Interface General';

export default InfoSquareBoldFilled12;
