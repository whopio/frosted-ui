import * as React from 'react';
import { IconProps } from './types';

export const Store16Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.16066 2.00005H5.42637L4.96557 5.39941C4.85682 6.20166 4.17185 6.80005 3.36226 6.80005C2.2176 6.80005 1.43489 5.64396 1.86001 4.58117L2.42146 3.17755C2.70592 2.46638 3.39471 2.00005 4.16066 2.00005ZM4.16066 0.800049H5.58904H5.60002H6.80002H9.20002H10.4H10.411H11.8394C13.096 0.800049 14.226 1.56512 14.6927 2.73188L15.2542 4.1355C15.7419 5.35484 15.3168 6.64469 14.4 7.38305V12.2C14.4 13.8569 13.0569 15.2 11.4 15.2H4.60002C2.94316 15.2 1.60002 13.8569 1.60002 12.2V7.38305C0.683198 6.64469 0.258098 5.35484 0.745834 4.1355L1.30728 2.73188C1.77399 1.56512 2.90402 0.800049 4.16066 0.800049ZM13.2 7.94495C13.0195 7.98102 12.8316 8.00005 12.6378 8.00005C11.701 8.00005 10.8599 7.54001 10.3454 6.82145C9.81578 7.53265 8.96836 8.00005 8.00001 8.00005C7.03166 8.00005 6.18424 7.53266 5.65461 6.82146C5.14007 7.54002 4.29907 8.00005 3.36226 8.00005C3.16843 8.00005 2.98057 7.98102 2.80002 7.94495V12.2C2.80002 13.1942 3.6059 14 4.60002 14H5.20002V11.2H4.60002C4.26864 11.2 4.00002 10.9314 4.00002 10.6C4.00002 10.2687 4.26864 10 4.60002 10H5.80002H10.2H11.4C11.7314 10 12 10.2687 12 10.6C12 10.9314 11.7314 11.2 11.4 11.2H10.8V14H11.4C12.3941 14 13.2 13.1942 13.2 12.2V7.94495ZM9.60002 14H6.40002V11.2H9.60002V14ZM6.65644 2.00005L6.29113 4.85892C6.15955 5.88868 6.96187 6.80005 8.00001 6.80005C9.03814 6.80005 9.84046 5.88869 9.70888 4.85892L9.34359 2.00005H6.65644ZM11.0345 5.39941L10.5737 2.00005H11.8394C12.6053 2.00005 13.2941 2.46638 13.5786 3.17755L14.14 4.58117C14.5651 5.64396 13.7824 6.80005 12.6378 6.80005C11.8282 6.80005 11.1432 6.20166 11.0345 5.39941Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Store16Icon;
