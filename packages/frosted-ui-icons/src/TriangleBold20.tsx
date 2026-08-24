import * as React from 'react';
import { IconProps } from './types';

export const TriangleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TriangleBold20"
      {...props}
    >
      <path
        d="M2.2 15.295L8.382 3.769c.693-1.292 2.545-1.292 3.238 0l6.18 11.526C18.456 16.518 17.57 18 16.18 18H3.82c-1.389 0-2.276-1.482-1.62-2.705z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TriangleBold20.category = 'Interface General';

export default TriangleBold20;
