import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.5559 6.25L17.1027 6.25C17.7363 6.25 18.25 6.76366 18.25 7.39729V12.6027C18.25 13.2363 17.7363 13.75 17.1027 13.75H10.5559C10.387 13.75 10.25 13.887 10.25 14.0559V17.0279C10.25 17.4247 9.78065 17.6345 9.48504 17.3699L2.01423 10.684C1.60656 10.3191 1.60656 9.68093 2.01423 9.31609L9.48504 2.63015C9.78065 2.36559 10.25 2.57541 10.25 2.97212V5.94405C10.25 6.11302 10.387 6.25 10.5559 6.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeft20.category = 'Arrows';

export default ArrowFatLeft20;
