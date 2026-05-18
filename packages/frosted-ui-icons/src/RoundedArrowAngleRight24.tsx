import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.74902 22.9978C4.46935 22.9977 1 19.5285 1 15.2488C1.0002 10.9693 4.46947 7.49982 8.74902 7.49976H20.4609L15.2373 2.28003C14.9447 1.98721 14.9447 1.51235 15.2373 1.21948C15.53 0.9268 16.0049 0.926991 16.2979 1.21948L22.7783 7.69507C22.919 7.8356 22.9979 8.02655 22.998 8.22534C22.9981 8.42425 22.9189 8.61494 22.7783 8.75562L16.2979 15.2371C16.005 15.5297 15.5301 15.5297 15.2373 15.2371C14.9447 14.9442 14.9447 14.4694 15.2373 14.1765L20.4121 8.99976H8.74902C5.29789 8.99982 2.5002 11.7977 2.5 15.2488C2.5 18.7 5.29777 21.4977 8.74902 21.4978H10.832C11.2461 21.4978 11.5818 21.8338 11.582 22.2478C11.582 22.662 11.2462 22.9978 10.832 22.9978H8.74902Z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleRight24.category = 'Arrows';

export default RoundedArrowAngleRight24;
