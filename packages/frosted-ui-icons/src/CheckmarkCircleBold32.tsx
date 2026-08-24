import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkCircleBold32"
      {...props}
    >
      <path
        d="M16 .5C24.634.5 31.5 7.366 31.5 16S24.634 31.5 16 31.5.5 24.634.5 16 7.366.5 16 .5zm0 2C8.47 2.5 2.5 8.47 2.5 16S8.47 29.5 16 29.5 29.5 23.53 29.5 16 23.53 2.5 16 2.5zm5.543 8.793c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-8.63 8.63c-.187.187-.442.293-.707.293-.265 0-.52-.106-.707-.293l-3.87-3.87c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0l3.163 3.163 7.923-7.923z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleBold32.category = 'Checkmarks';

export default CheckmarkCircleBold32;
