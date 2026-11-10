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
        d="M8.38 3.77l-6.18 11.525C1.545 16.518 2.432 18 3.82 18h12.36c1.389 0 2.276-1.482 1.62-2.705L11.62 3.769c-.694-1.292-2.546-1.292-3.239 0z"
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
