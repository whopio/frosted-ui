import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.29297 1.29318C9.68349 0.902842 10.3166 0.902768 10.707 1.29318C11.0972 1.68367 11.0973 2.31679 10.707 2.70724L7.41406 6.00021L10.707 9.29221C11.0974 9.68257 11.0971 10.3157 10.707 10.7063C10.3165 11.0968 9.68349 11.0968 9.29297 10.7063L6 7.41428L2.70703 10.7072C2.31659 11.0977 1.68351 11.0975 1.29297 10.7072C0.9025 10.3167 0.902463 9.68369 1.29297 9.29318L4.58594 6.00021L1.29297 2.70724C0.902445 2.31672 0.902444 1.68273 1.29297 1.29221C1.68344 0.902263 2.31665 0.902126 2.70703 1.29221L6 4.58615L9.29297 1.29318Z"
        fill={color}
      />
    </svg>
  );
};

XMarkBold12.category = 'Interface General';

export default XMarkBold12;
