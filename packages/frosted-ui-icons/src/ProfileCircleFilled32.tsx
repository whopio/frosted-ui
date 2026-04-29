import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM16 20.5C10.9454 20.5001 8.24076 24.1417 7.01562 26.7363C9.44704 28.7731 12.5801 30 16 30C19.4202 30 22.5529 28.7724 24.9844 26.7354C23.7586 24.141 21.0542 20.5 16 20.5ZM16 8.25C13.3766 8.25 11.25 10.3766 11.25 13C11.25 15.6234 13.3766 17.75 16 17.75C18.6234 17.75 20.75 15.6234 20.75 13C20.75 10.3766 18.6234 8.25 16 8.25Z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleFilled32.category = 'People';

export default ProfileCircleFilled32;
