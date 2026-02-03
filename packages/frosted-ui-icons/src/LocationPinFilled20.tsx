import * as React from 'react';
import { IconProps } from './types';

export const LocationPinFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 0C14.2651 0 18 3.47915 18 8C18 13.2334 14.2385 17.2902 12.0791 19.2002C10.8778 20.2627 9.12219 20.2627 7.9209 19.2002C5.76143 17.2902 2 13.2333 2 8C2 3.47916 5.73503 6.87175e-05 10 0ZM10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4Z"
        fill={color}
      />
    </svg>
  );
};

export default LocationPinFilled20;
