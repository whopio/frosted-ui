import * as React from 'react';
import { IconProps } from './types';

export const CubeDisconnected12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g
          stroke={color}
          clipPath="url(#clip0_1078_146)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1.77529 8.89361L5.27515 11.045C5.49317 11.179 5.74408 11.25 6 11.25 6.25592 11.25 6.50683 11.179 6.72485 11.045L10.2247 8.89361C10.5511 8.69296 10.75 8.33726 10.75 7.9541V4.0459C10.75 3.66275 10.5511 3.30705 10.2247 3.10639L6.72485.954972C6.50683.820952 6.25592.75 6 .75 5.74408.75 5.49318.820951 5.27516.954972L1.77529 3.10639C1.44888 3.30705 1.25 3.66275 1.25 4.0459V7.9541C1.25 8.33726 1.44888 8.69296 1.77529 8.89361zM5.99652 5.95555V8.93251M6.00006 5.95557L8.51329 4.59541M5.99652 5.95557L3.48329 4.59541" />
        </g>
        <defs>
          <clipPath id="clip0_1078_146">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default CubeDisconnected12;
