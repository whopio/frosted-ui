import * as React from 'react';
import { IconProps } from './types';

export const LocationPinFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 0C11.2239 0 14.5 2.35185 14.5 6.25C14.5 10.5842 11.5074 13.8045 9.77637 15.3145C8.74718 16.2121 7.25282 16.2121 6.22363 15.3145C4.4926 13.8045 1.5 10.5842 1.5 6.25C1.5 2.35185 4.7761 0 8 0ZM8 3.5C6.34315 3.5 5 4.84315 5 6.5C5 8.15685 6.34315 9.5 8 9.5C9.65685 9.5 11 8.15685 11 6.5C11 4.84315 9.65685 3.5 8 3.5Z"
        fill={color}
      />
    </svg>
  );
};

LocationPinFilled16.category = 'Location';

export default LocationPinFilled16;
