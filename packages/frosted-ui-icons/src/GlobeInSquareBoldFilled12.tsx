import * as React from 'react';
import { IconProps } from './types';

export const GlobeInSquareBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GlobeInSquareBoldFilled12"
      {...props}
    >
      <path
        d="M8 0c2.21 0 4 1.79 4 4v4c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h4zM6 2.25C3.929 2.25 2.25 3.929 2.25 6c0 2.071 1.679 3.75 3.75 3.75 2.071 0 3.75-1.679 3.75-3.75 0-2.071-1.679-3.75-3.75-3.75zm-.75 5.868c-.638-.226-1.143-.73-1.37-1.368h1.37v1.368zM8.12 6.75c-.227.638-.732 1.142-1.37 1.368V6.75h1.37zm-2.87-1.5H3.88c.227-.639.731-1.143 1.37-1.37v1.37zm1.5-1.37c.639.227 1.143.731 1.37 1.37H6.75V3.88z"
        fill={color}
      />
    </svg>
  );
};

GlobeInSquareBoldFilled12.category = 'Location';

export default GlobeInSquareBoldFilled12;
