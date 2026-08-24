import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkCircleFilled32"
      {...props}
    >
      <path
        d="M16 .5C24.636.5 31.5 7.364 31.5 16S24.636 31.5 16 31.5C7.365 31.5.5 24.636.5 16S7.365.5 16 .5zm6.78 10.97c-.293-.293-.767-.293-1.06 0l-8.1 8.1-3.34-3.34c-.293-.293-.767-.293-1.06 0-.293.292-.293.767 0 1.06l3.87 3.87c.14.14.331.22.53.22s.39-.08.53-.22l8.63-8.63c.293-.293.293-.767 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleFilled32.category = 'Checkmarks';

export default CheckmarkCircleFilled32;
