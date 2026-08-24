import * as React from 'react';
import { IconProps } from './types';

export const GlobeInSquare12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="GlobeInSquare12"
      {...props}
    >
      <path
        d="M8.25 0C10.321 0 12 1.679 12 3.75v4.5C12 10.321 10.321 12 8.25 12h-4.5C1.679 12 0 10.321 0 8.25v-4.5C0 1.679 1.679 0 3.75 0h4.5zm-4.5 1.5C2.507 1.5 1.5 2.507 1.5 3.75v4.5c0 1.243 1.007 2.25 2.25 2.25h4.5c1.243 0 2.25-1.007 2.25-2.25v-4.5c0-1.243-1.007-2.25-2.25-2.25h-4.5zM6 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zM3.615 6.75c.244.777.858 1.39 1.635 1.635V6.75H3.615zM6.75 8.385c.777-.244 1.39-.858 1.635-1.635H6.75v1.635zm-1.5-4.77c-.777.243-1.39.858-1.635 1.635H5.25V3.614zm1.5 1.635h1.635c-.244-.777-.858-1.392-1.635-1.636V5.25z"
        fill={color}
      />
    </svg>
  );
};

GlobeInSquare12.category = 'Location';

export default GlobeInSquare12;
