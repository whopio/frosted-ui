import * as React from 'react';
import { IconProps } from './types';

export const Triangle24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14.1416 3.03896L22.9254 18.5795C23.8523 20.2194 22.6675 22.25 20.7838 22.25H3.21619C1.33247 22.25 0.14771 20.2194 1.07461 18.5795L9.85842 3.03896C10.8001 1.37291 13.1999 1.37291 14.1416 3.03896Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Triangle24;
