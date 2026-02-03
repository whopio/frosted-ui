import * as React from 'react';
import { IconProps } from './types';

export const LightningFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.459 0C14.328 0 14.9026 0.903409 14.5342 1.69043L12.0488 7H15.874C16.8809 7.00017 17.4298 8.17551 16.7842 8.94824L7.9375 19.5371C7.16004 20.4672 5.65201 19.7702 5.85645 18.5752L7.06738 11.5H3.85156C3.04543 11.4998 2.47358 10.713 2.72266 9.94629L5.62402 1.02148L5.66504 0.90918C5.89283 0.362381 6.42926 0.000180316 7.0293 0H13.459Z"
        fill={color}
      />
    </svg>
  );
};

export default LightningFilled20;
