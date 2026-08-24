import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoCircleBoldFilled12"
      {...props}
    >
      <path
        d="M6 .25c3.176 0 5.75 2.574 5.75 5.75S9.176 11.75 6 11.75.25 9.176.25 6 2.824.25 6 .25zM6 5.5c-.552 0-1 .448-1 1V8c0 .552.448 1 1 1s1-.448 1-1V6.5c0-.552-.448-1-1-1zM6 3c-.497 0-.9.403-.9.9s.403.9.9.9.9-.403.9-.9S6.497 3 6 3z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBoldFilled12.category = 'Interface General';

export default InfoCircleBoldFilled12;
