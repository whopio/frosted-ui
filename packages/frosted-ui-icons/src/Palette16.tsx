import * as React from 'react';
import { IconProps } from './types';

export const Palette16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M13.4404 10C14.3463 10 15.1724 9.39922 15.2333 8.49539C15.2444 8.33169 15.25 8.1665 15.25 8C15.25 3.99594 12.0041 0.75 8 0.75C3.99594 0.75 0.75 3.99594 0.75 8C0.75 11.4024 3.09368 14.2573 6.25469 15.0385C7.07488 15.2412 7.83619 14.6552 8.0411 13.8356L8.61559 11.5377C8.84151 10.634 9.65347 10 10.585 10H13.4404Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 4C9 4.55228 8.55228 5 8 5 7.44772 5 7 4.55228 7 4 7 3.44772 7.44772 3 8 3 8.55228 3 9 3.44772 9 4zM5.5 6.5C5.5 7.05228 5.05228 7.5 4.5 7.5 3.94772 7.5 3.5 7.05228 3.5 6.5 3.5 5.94772 3.94772 5.5 4.5 5.5 5.05228 5.5 5.5 5.94772 5.5 6.5zM12.5 6.5C12.5 7.05228 12.0523 7.5 11.5 7.5 10.9477 7.5 10.5 7.05228 10.5 6.5 10.5 5.94772 10.9477 5.5 11.5 5.5 12.0523 5.5 12.5 5.94772 12.5 6.5zM6 11C6 11.5523 5.55228 12 5 12 4.44772 12 4 11.5523 4 11 4 10.4477 4.44772 10 5 10 5.55228 10 6 10.4477 6 11z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Palette16;
