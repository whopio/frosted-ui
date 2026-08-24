import * as React from 'react';
import { IconProps } from './types';

export const Lock12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Lock12"
      {...props}
    >
      <path
        d="M6 0c2.21 0 4 1.79 4 4v1.209c.883.386 1.5 1.266 1.5 2.291v2c0 1.38-1.12 2.5-2.5 2.5H3C1.62 12 .5 10.88.5 9.5v-2c0-1.025.617-1.905 1.5-2.291V4c0-2.21 1.79-4 4-4zM3 6.5c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h6c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1H3zm3-5C4.62 1.5 3.5 2.62 3.5 4v1h5V4c0-1.38-1.12-2.5-2.5-2.5z"
        fill={color}
      />
    </svg>
  );
};

Lock12.category = 'Security';

export default Lock12;
