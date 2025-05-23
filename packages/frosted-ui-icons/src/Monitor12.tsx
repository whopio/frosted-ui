import * as React from 'react';
import { IconProps } from './types';

export const Monitor12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.59375 6.73438H10.25M4 10.6562H8M4.60156 8.625V10.6562M7.39844 8.625V10.6562M2.375 8.625H9.625C10.1773 8.625 10.625 8.1773 10.625 7.625V2.875C10.625 2.32271 10.1773 1.875 9.625 1.875H2.375C1.82271 1.875 1.375 2.32271 1.375 2.875V7.625C1.375 8.1773 1.82271 8.625 2.375 8.625Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Monitor12;
