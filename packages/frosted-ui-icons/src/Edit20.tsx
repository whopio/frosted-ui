import * as React from 'react';
import { IconProps } from './types';

export const Edit20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.25 12.75V15.68C18.25 17.0994 17.0994 18.25 15.68 18.25H4.32C2.90063 18.25 1.75 17.0994 1.75 15.68V4.32C1.75 2.90063 2.90063 1.75 4.32 1.75H7.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.2594 4.24057L15.7594 7.74057M9.42167 13.2499H7.25C6.97386 13.2499 6.75 13.0261 6.75 12.7499V10.5783C6.75 10.0479 6.96069 9.53925 7.33572 9.16422L14.07 2.42993C15.0365 1.46343 16.6035 1.46343 17.57 2.42993V2.42993C18.5365 3.39643 18.5365 4.96343 17.57 5.92993L10.8357 12.6642C10.4607 13.0392 9.95204 13.2499 9.42167 13.2499Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Edit20;
