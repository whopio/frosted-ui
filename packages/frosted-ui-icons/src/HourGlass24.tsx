import * as React from 'react';
import { IconProps } from './types';

export const HourGlass24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g clipPath="url(#clip0_190_45)">
          <g clipPath="url(#clip1_190_45)">
            <path
              d="M9.6 12C9.6 9.39945 5.28508 10.4974 4.83741 3.605C4.79446 2.94365 5.33726 2.40002 6 2.40002H18C18.6627 2.40002 19.2055 2.94365 19.1626 3.605C18.7149 10.4974 14.4 9.39945 14.4 12C14.4 14.6006 18.7149 13.5027 19.1626 20.395C19.2055 21.0564 18.6627 21.6 18 21.6H6C5.33726 21.6 4.79446 21.0564 4.83741 20.3951C5.28508 13.5027 9.6 14.6006 9.6 12Z"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3417 9.23397C9.72719 8.4512 8.24579 7.21407 7.88394 5.91716C7.79489 5.59798 8.07015 5.32501 8.40152 5.32501H15.5985C15.9299 5.32501 16.2051 5.59798 16.1161 5.91716C15.7542 7.21407 14.2728 8.4512 12.6583 9.23397C12.2424 9.43561 11.7576 9.43561 11.3417 9.23397Z"
              fill={color}
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_190_45">
            <path fill={color} d="M0 0H24V24H0z" />
          </clipPath>
          <clipPath id="clip1_190_45">
            <path fill={color} d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default HourGlass24;
