import * as React from 'react';
import { IconProps } from './types';

export const PulseBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.2599 3.82695C14.6313 3.4185 15.2643 3.38839 15.673 3.75957C16.0816 4.13103 16.1117 4.76399 15.7403 5.17265L10.2286 11.2352C9.71621 11.7988 8.83 11.7986 8.31749 11.2352L5.45421 8.08574L1.74034 12.1727C1.36885 12.5813 0.735912 12.6115 0.327253 12.24C-0.0811357 11.8685 -0.11151 11.2355 0.25987 10.8269L4.49913 6.16484L4.59874 6.06523C5.08531 5.63374 5.82287 5.63415 6.30967 6.06523L6.41026 6.16484L9.27256 9.3123L14.2599 3.82695Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PulseBold16.category = 'Stats & Charts';

export default PulseBold16;
