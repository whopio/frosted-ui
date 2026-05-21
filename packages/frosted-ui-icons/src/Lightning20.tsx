import * as React from 'react';
import { IconProps } from './types';

export const Lightning20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.4593 0C14.3283 0 14.9029 0.903409 14.5345 1.69043L12.0491 7H15.8743C16.8812 7.00017 17.4301 8.17551 16.7845 8.94824L7.93782 19.5371C7.16036 20.4672 5.65233 19.7702 5.85676 18.5752L7.0677 11.5H3.85188C3.04575 11.4998 2.4739 10.713 2.72298 9.94629L5.62434 1.02148L5.66536 0.90918C5.89315 0.362381 6.42958 0.00018034 7.02962 0H13.4593ZM4.28255 10H7.69759C8.29774 10 8.75389 10.5403 8.65266 11.1318L7.53059 17.6836L15.2044 8.5H11.2132C10.5045 8.49969 10.0359 7.76307 10.3363 7.12109L12.9671 1.5H7.04524L4.28255 10Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Lightning20.category = 'Nature & Weather';

export default Lightning20;
