import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.92869 10.0654C2.46353 9.52524 2.84731 8.68831 3.56017 8.68831H5.33324V2.52165C5.33324 1.87731 5.85557 1.35498 6.49991 1.35498H9.49989C10.1442 1.35498 10.6666 1.87732 10.6666 2.52165V8.68831H12.4396C13.1525 8.68831 13.5363 9.52524 13.0711 10.0654L8.88396 14.9279C8.41849 15.4684 7.58129 15.4684 7.11583 14.9279L2.92869 10.0654Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowFatDownFilled16;
