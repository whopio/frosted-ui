import * as React from 'react';
import { IconProps } from './types';

export const CubeSize20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M10.0002 10V17.0833M10.0002 10L3.75 6.48435M10.0002 10L16.0522 6.5956M16.875 7.10754V12.8924C16.875 13.4946 16.5502 14.0498 16.0254 14.3451L10.8171 17.2747C10.3098 17.5602 9.69025 17.5602 9.18292 17.2747L3.97457 14.3451C3.44977 14.0498 3.125 13.4946 3.125 12.8924V7.10754C3.125 6.50542 3.44977 5.95011 3.97457 5.65491L9.18292 2.72523C9.69025 2.43984 10.3098 2.43984 10.8171 2.72523L16.0254 5.65491C16.5502 5.95011 16.875 6.50542 16.875 7.10754Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CubeSize20;
