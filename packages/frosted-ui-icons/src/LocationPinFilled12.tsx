import * as React from 'react';
import { IconProps } from './types';

export const LocationPinFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 0C8.76142 0 11 2.23858 11 5C11 8.21956 8.58717 10.5283 7.31934 11.5303C6.53967 12.1464 5.46033 12.1464 4.68066 11.5303C3.41283 10.5283 1 8.21956 1 5C1 2.23858 3.23858 0 6 0ZM6 2.5C4.61929 2.5 3.5 3.61929 3.5 5C3.5 6.38071 4.61929 7.5 6 7.5C7.38071 7.5 8.5 6.38071 8.5 5C8.5 3.61929 7.38071 2.5 6 2.5Z"
        fill={color}
      />
    </svg>
  );
};

LocationPinFilled12.category = 'Location';

export default LocationPinFilled12;
