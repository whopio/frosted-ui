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
        d="M8 0C11.2239 0 14.5 2.35185 14.5 6.25C14.5 8.8215 13.444 10.9402 12.2383 12.5205C11.0342 14.0986 9.65333 15.1777 8.92188 15.6904C8.36487 16.0808 7.63513 16.0808 7.07812 15.6904C6.34667 15.1777 4.96583 14.0986 3.76172 12.5205C2.55603 10.9402 1.5 8.8215 1.5 6.25C1.5 2.35185 4.7761 0 8 0ZM8 3.5C6.34315 3.5 5 4.84315 5 6.5C5 8.15685 6.34315 9.5 8 9.5C9.65685 9.5 11 8.15685 11 6.5C11 4.84315 9.65685 3.5 8 3.5Z"
        fill={color}
      />
    </svg>
  );
};

LocationPinFilled16.category = 'Location';

export default LocationPinFilled16;
