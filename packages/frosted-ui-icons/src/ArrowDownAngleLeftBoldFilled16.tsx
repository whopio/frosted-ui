import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.4998 1.75C14.3283 1.75 14.9998 2.42157 14.9998 3.25V8.5C14.9998 10.0188 13.7686 11.25 12.2498 11.25H6.30647L7.00959 11.8906C7.62198 12.4483 7.66671 13.3973 7.1092 14.0098C6.55147 14.622 5.60251 14.6668 4.99006 14.1094L1.49006 10.9219C1.18181 10.6411 1.0039 10.2441 0.999825 9.82715C0.995826 9.4101 1.16571 9.00939 1.46857 8.72266L4.96858 5.41016C5.57021 4.84087 6.52024 4.86726 7.08967 5.46875C7.65901 6.07044 7.63272 7.02043 7.03108 7.58984L6.33381 8.25H11.9998V3.25C11.9998 2.42162 12.6715 1.75008 13.4998 1.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleLeftBoldFilled16.category = 'Arrows';

export default ArrowDownAngleLeftBoldFilled16;
