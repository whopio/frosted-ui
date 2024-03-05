import * as React from 'react';
import { IconProps } from './types';

export const XDotCom20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_286_152)">
          <path
            d="M11.8618 8.46862L19.1472 -3.05176e-05H17.4208L11.0949 7.35318L6.04244 -3.05176e-05H0.215027L7.85534 11.1193L0.215027 20H1.94152L8.62182 12.2348L13.9576 20H19.785L11.8614 8.46862H11.8618ZM9.49715 11.2173L8.72303 10.1101L2.5636 1.29965H5.2154L10.1861 8.40992L10.9602 9.51716L17.4216 18.7594H14.7698L9.49715 11.2177V11.2173Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_286_152">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default XDotCom20;
