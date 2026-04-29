import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.1162 2.11633C16.6043 1.62831 17.3957 1.6283 17.8838 2.11633C18.3717 2.60447 18.3718 3.39581 17.8838 3.88391L11.7676 10.0001L17.8838 16.1163C18.3717 16.6045 18.3718 17.3958 17.8838 17.8839C17.3957 18.3719 16.6044 18.3718 16.1162 17.8839L10 11.7677L3.88379 17.8839C3.3957 18.372 2.60438 18.3719 2.11621 17.8839C1.62815 17.3958 1.6281 16.6045 2.11621 16.1163L8.23242 10.0001L2.11621 3.88391C1.62807 3.39577 1.6281 2.60449 2.11621 2.11633C2.60437 1.62822 3.39565 1.62819 3.88379 2.11633L10 8.23254L16.1162 2.11633Z"
        fill={color}
      />
    </svg>
  );
};

XMarkFilled20.category = 'Interface General';

export default XMarkFilled20;
