import * as React from 'react';
import { IconProps } from './types';

export const ClockBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM15.75 5.625C14.9906 5.625 14.3751 6.24065 14.375 7V16.5C14.375 16.9081 14.5566 17.2954 14.8701 17.5566L19.3701 21.3066C19.9535 21.7924 20.8206 21.7131 21.3066 21.1299C21.7924 20.5465 21.7131 19.6794 21.1299 19.1934L17.125 15.8555V7C17.1249 6.24065 16.5094 5.625 15.75 5.625Z"
        fill={color}
      />
    </svg>
  );
};

ClockBoldFilled32.category = 'Interface General';

export default ClockBoldFilled32;
