import * as React from 'react';
import { IconProps } from './types';

export const GlobeInSquareBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GlobeInSquareBold12"
      {...props}
    >
      <path
        d="M8 0c2.21 0 4 1.79 4 4v4c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h4zM4 2c-1.105 0-2 .895-2 2v4c0 1.105.895 2 2 2h4c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2H4zm2 .25c2.071 0 3.75 1.679 3.75 3.75 0 2.071-1.679 3.75-3.75 3.75-2.071 0-3.75-1.679-3.75-3.75 0-2.071 1.679-3.75 3.75-3.75zm-2.12 4.5c.227.638.732 1.142 1.37 1.368V6.75H3.88zm2.87 1.368c.638-.226 1.143-.73 1.37-1.368H6.75v1.368zm0-2.868h1.37c-.227-.639-.731-1.143-1.37-1.37v1.37zm-1.5-1.37c-.639.227-1.143.731-1.37 1.37h1.37V3.88z"
        fill={color}
      />
    </svg>
  );
};

GlobeInSquareBold12.category = 'Location';

export default GlobeInSquareBold12;
