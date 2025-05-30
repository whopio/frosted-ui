import * as React from 'react';
import { IconProps } from './types';

export const ListCheck16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.02865 6.33183L5.77865 6.83187L7.0264 5.16816M9.20533 6H10.872M9.16667 10H10.8333M5.02865 10.3326L5.77865 10.8326L7.0264 9.16893M3.83333 13.5H12.1667C12.9031 13.5 13.5 12.9031 13.5 12.1667V3.83333C13.5 3.09695 12.9031 2.5 12.1667 2.5H3.83333C3.09695 2.5 2.5 3.09695 2.5 3.83333V12.1667C2.5 12.9031 3.09695 13.5 3.83333 13.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ListCheck16;
