import * as React from 'react';
import { IconProps } from './types';

export const PulseBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.2929 3.29298C10.6834 2.90246 11.3164 2.90246 11.707 3.29298C12.0974 3.68352 12.0975 4.31655 11.707 4.70705L7.88371 8.53029C7.39559 9.01839 6.60429 9.01834 6.11614 8.53029L3.99992 6.41408L1.70696 8.70705C1.31646 9.09755 0.683424 9.0975 0.292893 8.70705C-0.0976311 8.31652 -0.0976311 7.68351 0.292893 7.29298L3.11614 4.46974L3.21086 4.38381C3.66911 4.01003 4.33074 4.01003 4.78899 4.38381L4.88371 4.46974L6.99992 6.58595L10.2929 3.29298Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PulseBold12.category = 'Stats & Charts';

export default PulseBold12;
