import * as React from 'react';
import { IconProps } from './types';

export const Moon20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Moon20"
      {...props}
    >
      <path
        d="M9.057 4.445c0-1.098.273-2.133.754-3.04.036-.068-.014-.151-.09-.149C5.016 1.404 1.25 5.261 1.25 10c0 4.832 3.918 8.75 8.75 8.75 4.739 0 8.595-3.767 8.743-8.47.003-.077-.08-.127-.148-.09-.907.48-1.94.755-3.038.755-3.59 0-6.5-2.91-6.5-6.5z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Moon20.category = 'Nature & Weather';

export default Moon20;
