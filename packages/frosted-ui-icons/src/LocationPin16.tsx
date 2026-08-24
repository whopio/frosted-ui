import * as React from 'react';
import { IconProps } from './types';

export const LocationPin16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LocationPin16"
      {...props}
    >
      <path
        d="M8 0c3.224 0 6.5 2.352 6.5 6.25 0 2.572-1.056 4.69-2.262 6.27-1.204 1.579-2.585 2.658-3.316 3.17-.557.39-1.287.39-1.844 0-.731-.512-2.112-1.591-3.316-3.17C2.556 10.94 1.5 8.822 1.5 6.25 1.5 2.352 4.776 0 8 0zm0 1.5c-2.575 0-5 1.85-5 4.75 0 2.144.878 3.95 1.954 5.36C6.031 13.022 7.28 14 7.94 14.462c.024.016.045.021.061.021s.037-.005.06-.021c.66-.463 1.909-1.44 2.986-2.852C12.122 10.2 13 8.394 13 6.25c0-2.9-2.425-4.75-5-4.75zm0 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM8 5c-.828 0-1.5.672-1.5 1.5S7.172 8 8 8s1.5-.672 1.5-1.5S8.828 5 8 5z"
        fill={color}
      />
    </svg>
  );
};

LocationPin16.category = 'Location';

export default LocationPin16;
