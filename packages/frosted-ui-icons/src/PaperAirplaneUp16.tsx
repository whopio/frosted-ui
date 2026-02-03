import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUp16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_6317_174)">
        <path
          d="M5.89628 1.64028C6.75848 -0.105677 9.24796 -0.105682 10.1101 1.64028L15.2576 12.0641C16.3074 14.1914 14.1377 16.4744 11.9598 15.5338L8.26835 13.9391C8.0991 13.866 7.90734 13.866 7.73808 13.9391L4.04667 15.5338C1.86863 16.4747 -0.301106 14.1915 0.748819 12.0641L5.89628 1.64028ZM8.76542 2.30434C8.45357 1.67281 7.55287 1.67283 7.24101 2.30434L2.09355 12.7282C1.66164 13.6041 2.55521 14.5443 3.45194 14.1569L7.14335 12.5622C7.17922 12.5467 7.21627 12.5346 7.25273 12.5211V9.25356C7.25273 8.83935 7.58851 8.50356 8.00273 8.50356C8.41692 8.50358 8.75273 8.83936 8.75273 9.25356V12.5202C8.7895 12.5337 8.82689 12.5465 8.86308 12.5622L12.5545 14.1569C13.4511 14.544 14.3446 13.604 13.9129 12.7282L8.76542 2.30434Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_6317_174">
          <path fill={color} d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PaperAirplaneUp16;
