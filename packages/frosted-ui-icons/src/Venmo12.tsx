import * as React from 'react';
import { IconProps } from './types';

export const Venmo12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Venmo12"
      {...props}
    >
      <path
        d="M10.461.762c.037-.007.076.01.095.042.372.613.54 1.249.54 2.046 0 2.603-2.289 5.98-4.16 8.365-.018.022-.044.035-.072.035H2.7c-.045 0-.084-.032-.091-.076L.92 1.42c-.009-.053.03-.102.083-.107L4.568.987c.05-.005.094.03.1.08l.865 6.723c.01.085.122.11.167.037.821-1.338 1.762-3.295 1.762-4.652 0-.72-.117-1.229-.305-1.648-.024-.055.008-.12.067-.132l3.237-.633z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Venmo12.category = 'Social & Brands';

export default Venmo12;
