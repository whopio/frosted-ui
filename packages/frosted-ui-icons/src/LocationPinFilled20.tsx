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
        d="M10 0C14.2651 0 18 3.47915 18 8C18 11.0082 16.7559 13.5621 15.3076 15.5166C13.8594 17.471 12.1751 18.8704 11.2109 19.5889C10.4862 20.1286 9.51378 20.1287 8.78906 19.5889C7.82484 18.8704 6.14065 17.4711 4.69238 15.5166C3.24408 13.5621 2 11.0082 2 8C2 3.47916 5.73503 6.87175e-05 10 0ZM10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4Z"
        fill={color}
      />
    </svg>
  );
};

LocationPinFilled20.category = 'Location';

export default LocationPinFilled20;
