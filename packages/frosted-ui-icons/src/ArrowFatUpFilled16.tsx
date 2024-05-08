import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M2.92872 5.95606C2.46356 6.49624 2.84734 7.33315 3.5602 7.33315H5.33327V13.4998C5.33327 14.1442 5.8556 14.6665 6.49994 14.6665H9.49992C10.1443 14.6665 10.6666 14.1442 10.6666 13.4998V7.33315H12.4397C13.1525 7.33315 13.5363 6.49624 13.0711 5.95606L8.88399 1.09356C8.41852 0.553041 7.58132 0.553042 7.11586 1.09356L2.92872 5.95606Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowFatUpFilled16;
