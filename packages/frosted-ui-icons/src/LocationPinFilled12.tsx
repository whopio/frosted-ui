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
      data-fui-icon="LocationPinFilled12"
      {...props}
    >
      <path
        d="M6 0c2.761 0 5 2.239 5 5 0 1.875-.821 3.405-1.736 4.526-.915 1.12-1.958 1.88-2.502 2.236-.466.304-1.058.304-1.524 0-.544-.356-1.587-1.115-2.502-2.236C1.821 8.405 1 6.876 1 5c0-2.761 2.239-5 5-5zm0 2.5C4.62 2.5 3.5 3.62 3.5 5S4.62 7.5 6 7.5 8.5 6.38 8.5 5 7.38 2.5 6 2.5z"
        fill={color}
      />
    </svg>
  );
};

LocationPinFilled12.category = 'Location';

export default LocationPinFilled12;
