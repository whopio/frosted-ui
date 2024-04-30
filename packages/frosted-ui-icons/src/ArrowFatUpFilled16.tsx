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
          d="M2.92869 5.956C2.46353 6.49618 2.84731 7.33309 3.56017 7.33309H5.33324V13.4998C5.33324 14.1441 5.85557 14.6664 6.49991 14.6664H9.49989C10.1442 14.6664 10.6666 14.1441 10.6666 13.4998V7.33309H12.4396C13.1525 7.33309 13.5363 6.49618 13.0711 5.956L8.88396 1.0935C8.41849 0.55298 7.58129 0.552981 7.11583 1.0935L2.92869 5.956Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowFatUpFilled16;
