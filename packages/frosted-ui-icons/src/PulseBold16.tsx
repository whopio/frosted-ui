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
        d="M14.2599 3.82686C14.6313 3.41841 15.2643 3.3883 15.673 3.75947C16.0816 4.13093 16.1117 4.7639 15.7403 5.17256L10.2286 11.2351C9.71621 11.7987 8.83 11.7985 8.31749 11.2351L5.45421 8.08565L1.74034 12.1726C1.36885 12.5812 0.735912 12.6114 0.327253 12.2399C-0.0811357 11.8684 -0.11151 11.2354 0.25987 10.8269L4.49913 6.16475L4.59874 6.06514C5.08531 5.63365 5.82287 5.63406 6.30967 6.06514L6.41026 6.16475L9.27256 9.31221L14.2599 3.82686Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PulseBold16.category = 'Stats & Charts';

export default PulseBold16;
