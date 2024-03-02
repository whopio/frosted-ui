import * as React from 'react';
import { IconProps } from './types';

export const XMark12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M4.93925 6L2.46442 8.47483C2.17153 8.76772 2.17153 9.2426 2.46442 9.53549C2.75732 9.82838 3.23219 9.82838 3.52508 9.53549L5.99991 7.06066L8.47483 9.53558C8.76772 9.82847 9.2426 9.82847 9.53549 9.53558C9.82838 9.24269 9.82838 8.76781 9.53549 8.47492L7.06057 6L9.53549 3.52508C9.82838 3.23219 9.82838 2.75731 9.53549 2.46442C9.2426 2.17153 8.76772 2.17153 8.47483 2.46442L5.99991 4.93934L3.52508 2.46451C3.23219 2.17162 2.75731 2.17162 2.46442 2.46451C2.17153 2.75741 2.17153 3.23228 2.46442 3.52517L4.93925 6Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default XMark12;
