import * as React from 'react';
import { IconProps } from './types';

export const MedalBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MedalBoldFilled32"
      {...props}
    >
      <path
        d="M26.058 29.58c.223.858-.582 1.629-1.43 1.37L16 28.314 7.37 30.95c-.847.259-1.65-.512-1.428-1.37l1.689-6.487C9.93 24.913 12.839 26 16 26c3.16 0 6.067-1.088 8.367-2.907l1.69 6.487zM16 1c6.351 0 11.5 5.149 11.5 11.5S22.351 24 16 24 4.5 18.851 4.5 12.5 9.649 1 16 1zm4.951 8.349c-.39-.39-1.023-.39-1.414 0l-5.23 5.23-1.838-1.838c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414L13.6 16.7c.187.188.441.293.707.293.265 0 .52-.105.707-.293l5.937-5.937c.39-.39.39-1.024 0-1.414z"
        fill={color}
      />
    </svg>
  );
};

MedalBoldFilled32.category = 'Interface General';

export default MedalBoldFilled32;
