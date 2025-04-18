import * as React from 'react';
import { IconProps } from './types';

export const HourGlass24 = ({
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
      <g clipPath="url(#clip0_190_45)">
        <path
          d="M9.60005 12C9.60005 9.39945 5.28513 10.4974 4.83746 3.605C4.7945 2.94365 5.33731 2.40002 6.00005 2.40002H18C18.6628 2.40002 19.2056 2.94365 19.1626 3.605C18.715 10.4974 14.4 9.39945 14.4 12C14.4 14.6006 18.715 13.5027 19.1626 20.395C19.2056 21.0564 18.6628 21.6 18 21.6H6.00005C5.33731 21.6 4.7945 21.0564 4.83746 20.3951C5.28513 13.5027 9.60005 14.6006 9.60005 12Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3417 9.23391C9.72724 8.45114 8.24583 7.21401 7.88399 5.9171C7.79493 5.59792 8.0702 5.32495 8.40157 5.32495H15.5985C15.9299 5.32495 16.2052 5.59792 16.1161 5.9171C15.7543 7.21401 14.2729 8.45114 12.6584 9.23391C12.2425 9.43555 11.7576 9.43555 11.3417 9.23391Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_190_45">
          <path fill={color} d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HourGlass24;
