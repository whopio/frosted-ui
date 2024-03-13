import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFilled16 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.52538 10.6352C7.38218 10.7844 7.18376 10.8678 6.977 10.8658C6.77024 10.8638 6.57348 10.7765 6.43323 10.6246L4.40202 8.42408C4.12107 8.11971 4.14005 7.64522 4.44442 7.36426C4.74878 7.08331 5.22327 7.10229 5.50423 7.40666L6.99504 9.02171L10.5057 5.36476C10.7926 5.06595 11.2673 5.05626 11.5662 5.34311C11.865 5.62997 11.8747 6.10475 11.5878 6.40355L7.52538 10.6352Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default CheckmarkCircleFilled16;
