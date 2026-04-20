import * as React from 'react';
import { IconProps } from './types';

export const PulseBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22.2929 6.29314C22.6834 5.90261 23.3164 5.90261 23.707 6.29314C24.0974 6.68367 24.0975 7.3167 23.707 7.7072L15.0312 16.383C14.4617 16.9525 13.5382 16.9524 12.9687 16.383L7.99992 11.4142L1.70696 17.7072C1.31646 18.0977 0.683423 18.0976 0.292893 17.7072C-0.0976309 17.3167 -0.0976311 16.6837 0.292893 16.2931L6.96867 9.61736L7.07903 9.51677C7.61369 9.08059 8.38616 9.08058 8.92082 9.51677L9.03117 9.61736L13.9999 14.5861L22.2929 6.29314Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PulseBold24.category = 'Stats & Charts';

export default PulseBold24;
