import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmark24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.25 11.5L11 13.25L14.75 9.50003M20.25 11.9124V6.94155C20.25 6.08069 19.6991 5.31641 18.8825 5.04418L12.6325 2.96085C12.2219 2.824 11.7781 2.824 11.3675 2.96085L5.11754 5.04418C4.30086 5.31641 3.75 6.08069 3.75 6.94155V11.9124C3.75 16.8848 8 19.25 12 21.4079C16 19.25 20.25 16.8848 20.25 11.9124Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShieldCheckmark24;
