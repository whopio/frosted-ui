import * as React from 'react';
import { IconProps } from './types';

export const Plus12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0.25C6.41421 0.25 6.75 0.585786 6.75 1V5.25H11C11.4142 5.25 11.75 5.58579 11.75 6C11.75 6.41421 11.4142 6.75 11 6.75H6.75V11C6.75 11.4142 6.41421 11.75 6 11.75C5.58579 11.75 5.25 11.4142 5.25 11V6.75H1C0.585786 6.75 0.25 6.41421 0.25 6C0.25 5.58579 0.585786 5.25 1 5.25H5.25V1C5.25 0.585786 5.58579 0.25 6 0.25Z"
        fill={color}
      />
    </svg>
  );
};

Plus12.category = 'Interface General';

export default Plus12;
