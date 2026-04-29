import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM9.33301 14.417C8.45891 14.4172 7.75018 15.1257 7.75 16C7.7502 16.8743 8.45893 17.5838 9.33301 17.584C10.2072 17.584 10.9168 16.8744 10.917 16C10.9168 15.1256 10.2073 14.417 9.33301 14.417ZM16 14.417C15.1258 14.4172 14.4172 15.1258 14.417 16C14.4172 16.8742 15.1258 17.5838 16 17.584C16.8744 17.584 17.5838 16.8743 17.584 16C17.5838 15.1257 16.8744 14.417 16 14.417ZM22.6631 14.417C21.7889 14.4172 21.0803 15.1258 21.0801 16C21.0803 16.8742 21.7889 17.5838 22.6631 17.584C23.5375 17.584 24.2469 16.8743 24.2471 16C24.2469 15.1257 23.5375 14.417 22.6631 14.417Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsCircleFilled32.category = 'Interface General';

export default ThreeDotsCircleFilled32;
