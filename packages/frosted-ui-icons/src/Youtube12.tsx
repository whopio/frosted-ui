import * as React from 'react';
import { IconProps } from './types';

export const Youtube12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.1021 2.00388C10.5542 2.14382 10.9094 2.55462 11.0304 3.07737C11.2491 4.02393 11.25 6 11.25 6C11.25 6 11.25 7.9761 11.0304 8.92265C10.9094 9.4454 10.5542 9.8562 10.1021 9.9961C9.28365 10.25 6 10.25 6 10.25C6 10.25 2.71637 10.25 1.89784 9.9961C1.4458 9.8562 1.09055 9.4454 0.96954 8.92265C0.75 7.9761 0.75 6 0.75 6C0.75 6 0.75 4.02393 0.96954 3.07737C1.09055 2.55462 1.4458 2.14382 1.89784 2.00388C2.71637 1.75 6 1.75 6 1.75C6 1.75 9.28365 1.75 10.1021 2.00388Z"
          stroke={color}
          clipRule="evenodd"
          strokeWidth="1.5"
        />
        <path
          d="M5.41491 7.4333L7.52266 6.21649C7.68933 6.12027 7.68933 5.8797 7.52266 5.78347L5.41491 4.56665C5.24824 4.47043 5.03992 4.59071 5.03992 4.78316V7.21679C5.03992 7.40924 5.24824 7.52952 5.41491 7.4333Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Youtube12;
