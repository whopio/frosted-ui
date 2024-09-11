import * as React from 'react';
import { IconProps } from './types';

export const Moon32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M28.3308 15.7483C26.9185 16.7467 25.1944 17.3334 23.3333 17.3334C18.5468 17.3334 14.6666 13.4532 14.6666 8.66669C14.6666 6.80557 15.2533 5.08146 16.2517 3.66921C16.168 3.66753 16.0841 3.66669 16 3.66669C9.18845 3.66669 3.66663 9.18851 3.66663 16C3.66663 22.8115 9.18845 28.3334 16 28.3334C22.8114 28.3334 28.3333 22.8115 28.3333 16C28.3333 15.9159 28.3325 15.832 28.3308 15.7483Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Moon32;
