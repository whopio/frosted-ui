import * as React from 'react';
import { IconProps } from './types';

export const YoutubeFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.1021 2.00388C10.5542 2.14382 10.9094 2.55462 11.0304 3.07737C11.2491 4.02393 11.25 6 11.25 6C11.25 6 11.25 7.9761 11.0304 8.92265C10.9094 9.4454 10.5542 9.8562 10.1021 9.9961C9.28365 10.25 6 10.25 6 10.25C6 10.25 2.71637 10.25 1.89784 9.9961C1.4458 9.8562 1.09055 9.4454 0.96954 8.92265C0.75 7.9761 0.75 6 0.75 6C0.75 6 0.75 4.02393 0.96954 3.07737C1.09055 2.55462 1.4458 2.14382 1.89784 2.00388C2.71637 1.75 6 1.75 6 1.75C6 1.75 9.28365 1.75 10.1021 2.00388ZM7.7567 6.00015L4.89892 7.64995V4.35033L7.7567 6.00015Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default YoutubeFilled12;
