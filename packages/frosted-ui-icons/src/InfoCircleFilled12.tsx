import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoCircleFilled12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 5.5c-.414 0-.75.336-.75.75v2c0 .414.336.75.75.75s.75-.336.75-.75v-2c0-.414-.336-.75-.75-.75zm0-2.75c-.497 0-.9.403-.9.9s.403.9.9.9.9-.403.9-.9-.403-.9-.9-.9z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleFilled12.category = 'Interface General';

export default InfoCircleFilled12;
