import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.49993 1.75C1.6715 1.75 0.999931 2.42157 0.999931 3.25V8.5C0.999931 10.0188 2.23115 11.25 3.74993 11.25H9.69329L8.99017 11.8906C8.37778 12.4483 8.33304 13.3973 8.89056 14.0098C9.44829 14.622 10.3972 14.6668 11.0097 14.1094L14.5097 10.9219C14.8179 10.6411 14.9959 10.2441 14.9999 9.82715C15.0039 9.4101 14.834 9.00939 14.5312 8.72266L11.0312 5.41016C10.4295 4.84087 9.47952 4.86726 8.91009 5.46875C8.34075 6.07044 8.36704 7.02043 8.96868 7.58984L9.66595 8.25H3.99993V3.25C3.99993 2.42162 3.32829 1.75008 2.49993 1.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleRightBoldFilled16.category = 'Arrows';

export default ArrowDownAngleRightBoldFilled16;
