import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.25 0C9.04493 2.68444e-08 10.5 1.45507 10.5 3.25V8.75C10.5 10.5449 9.04493 12 7.25 12H4.75C2.95507 12 1.5 10.5449 1.5 8.75V3.25C1.5 1.45507 2.95507 1.07376e-07 4.75 0H7.25ZM5 8C4.58579 8 4.25 8.33579 4.25 8.75C4.25 9.16421 4.58579 9.5 5 9.5H7C7.41421 9.5 7.75 9.16421 7.75 8.75C7.75 8.33579 7.41421 8 7 8H5Z"
        fill={color}
      />
    </svg>
  );
};

export default MobilePhoneFilled12;
