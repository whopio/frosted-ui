import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.05273 0.576416C5.55144 -0.00280386 6.44859 -0.00262287 6.94727 0.576416L10.0879 4.2229C10.6456 4.87103 10.1853 5.87507 9.33008 5.87524H8.375V10.1252C8.37475 10.8153 7.81514 11.3752 7.125 11.3752H4.875C4.1849 11.3751 3.62525 10.8153 3.625 10.1252V5.87524H2.66992C1.81488 5.87487 1.35529 4.87099 1.91309 4.2229L5.05273 0.576416ZM3.76074 4.37524H4.375C4.78904 4.37532 5.12481 4.71124 5.125 5.12524V9.87524H6.875V5.12524C6.87519 4.71125 7.21099 4.37535 7.625 4.37524H8.23926L6 1.77466L3.76074 4.37524Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowFatUp12;
