import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.25 9.44405V2.89729C6.25 2.26366 6.76366 1.75 7.39729 1.75H12.6027C13.2363 1.75 13.75 2.26366 13.75 2.89729V9.44405C13.75 9.61302 13.887 9.75 14.0559 9.75H17.0279C17.4247 9.75 17.6345 10.2193 17.3699 10.515L10.684 17.9858C10.3191 18.3934 9.68093 18.3934 9.31609 17.9858L2.63015 10.515C2.36559 10.2193 2.57541 9.75 2.97212 9.75H5.94405C6.11302 9.75 6.25 9.61302 6.25 9.44405Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatDown20.category = 'Arrows';

export default ArrowFatDown20;
