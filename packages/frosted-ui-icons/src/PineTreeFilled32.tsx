import * as React from 'react';
import { IconProps } from './types';

export const PineTreeFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.3125 1.29712C15.6843 0.907282 16.3129 0.907125 16.6846 1.29712L16.7598 1.38696L25.7861 13.4827C26.2531 14.1092 25.806 15.0002 25.0244 15.0002H21.3428L27.8271 24.5159C28.256 25.1463 27.8047 26 27.042 26.0002H16.7471V30.2483C16.7471 30.6625 16.4113 30.9983 15.9971 30.9983C15.583 30.9981 15.2471 30.6624 15.2471 30.2483V26.0002H4.95801C4.19482 26.0002 3.74308 25.1455 4.17285 24.5149L10.6621 15.0002H6.97363C6.19209 15.0002 5.74503 14.1092 6.21191 13.4827L15.2373 1.38696L15.3125 1.29712Z"
        fill={color}
      />
    </svg>
  );
};

PineTreeFilled32.category = 'Nature & Weather';

export default PineTreeFilled32;
