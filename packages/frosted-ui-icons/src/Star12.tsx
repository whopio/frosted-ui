import * as React from 'react';
import { IconProps } from './types';

export const Star12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.65755 1.08985C5.7952 0.803385 6.2048 0.803385 6.34245 1.08985L7.5267 3.55483C7.58215 3.67016 7.69235 3.74978 7.81965 3.76645L10.5444 4.12319C10.8613 4.16467 10.988 4.55355 10.7559 4.77231L8.7639 6.65045C8.67045 6.7386 8.6282 6.86785 8.6517 6.99385L9.15195 9.6772C9.2102 9.98965 8.8787 10.2298 8.59805 10.0785L6.1807 8.77545C6.06795 8.7147 5.93205 8.7147 5.8193 8.77545L3.40196 10.0785C3.12128 10.2298 2.78977 9.98965 2.84802 9.6772L3.3483 6.99385C3.3718 6.86785 3.32955 6.7386 3.23609 6.65045L1.24403 4.77231C1.012 4.55355 1.13871 4.16467 1.45553 4.12319L4.18034 3.76645C4.30765 3.74978 4.41787 3.67016 4.47328 3.55483L5.65755 1.08985Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Star12;
