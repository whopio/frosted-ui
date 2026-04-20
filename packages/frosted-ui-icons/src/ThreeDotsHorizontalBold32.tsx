import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.75781 13.5C7.13827 13.5002 8.25765 14.6195 8.25781 16C8.25764 17.3805 7.13827 18.4998 5.75781 18.5C4.37738 18.4998 3.25799 17.3804 3.25781 16C3.25798 14.6196 4.37737 13.5002 5.75781 13.5ZM16.001 13.5C17.3812 13.5004 18.5008 14.6197 18.501 16C18.5008 17.3803 17.3812 18.4996 16.001 18.5C14.6204 18.5 13.5012 17.3806 13.501 16C13.5011 14.6194 14.6204 13.5 16.001 13.5ZM26.2402 13.5C27.6205 13.5004 28.7401 14.6197 28.7402 16C28.7401 17.3803 27.6205 18.4996 26.2402 18.5C24.8596 18.5 23.7404 17.3806 23.7402 16C23.7404 14.6194 24.8596 13.5 26.2402 13.5Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontalBold32.category = 'Interface General';

export default ThreeDotsHorizontalBold32;
