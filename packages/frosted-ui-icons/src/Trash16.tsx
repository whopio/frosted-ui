import * as React from 'react';
import { IconProps } from './types';

export const Trash16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14 3.75L12.7762 13.5858C12.7152 14.5219 11.9381 15.25 11 15.25H5C4.0619 15.25 3.28482 14.5219 3.22377 13.5858L2 3.75M11 3.75L10.6287 2.26493C10.4061 1.37459 9.60618 0.75 8.68845 0.75H7.31155C6.39382 0.75 5.59385 1.37459 5.37127 2.26493L5 3.75M0.75 3.75H15.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Trash16;
