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
      data-fui-icon="LocationPinFilled16"
      {...props}
    >
      <path
        d="M8 0c3.224 0 6.5 2.352 6.5 6.25 0 2.572-1.056 4.69-2.262 6.27-1.204 1.579-2.585 2.658-3.316 3.17-.557.39-1.287.39-1.844 0-.731-.512-2.112-1.591-3.316-3.17C2.556 10.94 1.5 8.822 1.5 6.25 1.5 2.352 4.776 0 8 0zm0 3.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"
        fill={color}
      />
    </svg>
  );
};

LocationPinFilled16.category = 'Location';

export default LocationPinFilled16;
