import * as React from 'react';
import { IconProps } from './types';

export const Rotate12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M0.750107 4.24991C0.750107 4.24991 1.43528 0.749985 5.50001 0.749985C9.56474 0.749985 10.2499 4.24991 10.2499 4.24991M11.2499 0.749985V3.54993C11.2499 3.93652 10.9365 4.24991 10.5499 4.24991H7.74996M11.2499 7.74984C11.2499 7.74984 10.5647 11.2498 6.49999 11.2498C2.43526 11.2498 1.75009 7.74984 1.75009 7.74984M0.750107 11.2498V8.44983C0.750107 8.06324 1.0635 7.74984 1.45009 7.74984H4.25004"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Rotate12;
