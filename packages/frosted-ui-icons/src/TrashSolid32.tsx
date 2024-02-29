import * as React from 'react';
import { IconProps } from './types';

export const TrashSolid32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23.6582 26.1665L24.5 9.7605H7.5L8.34179 26.1665C8.43045 27.8944 9.85732 29.25 11.5875 29.25H20.4125C22.1427 29.25 23.5696 27.8945 23.6582 26.1665Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 7.75L11.8029 5.73081C12.0599 4.01749 13.5317 2.75 15.2642 2.75H16.7358C18.4683 2.75 19.9401 4.01749 20.1971 5.73081L20.5 7.75M4.75 7.75H27.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default TrashSolid32;
