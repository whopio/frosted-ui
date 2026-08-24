import * as React from 'react';
import { IconProps } from './types';

export const LocationPinFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LocationPinFilled24"
      {...props}
    >
      <path
        d="M12 0c2.44 0 4.81 1.142 6.559 2.868 1.75 1.727 2.941 4.1 2.941 6.632 0 3.541-1.43 6.588-3.124 8.955-1.694 2.368-3.68 4.1-4.872 5.028-.891.695-2.117.695-3.008 0-1.193-.929-3.179-2.66-4.872-5.028C3.931 16.088 2.5 13.042 2.5 9.5c0-2.533 1.19-4.905 2.941-6.632C7.191 1.142 9.56 0 12 0zm0 5C9.515 5 7.5 7.015 7.5 9.5S9.515 14 12 14s4.5-2.015 4.5-4.5S14.485 5 12 5z"
        fill={color}
      />
    </svg>
  );
};

LocationPinFilled24.category = 'Location';

export default LocationPinFilled24;
