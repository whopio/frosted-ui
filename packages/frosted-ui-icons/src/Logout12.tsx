import * as React from 'react';
import { IconProps } from './types';

export const Logout12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.33962 10.8302H7.13208C8.15328 10.8302 8.98113 10.0023 8.98113 8.98113V8.98113M1.0566 4.7195V3.16981C1.0566 2.00272 2.00272 1.0566 3.16981 1.0566H6.86792C8.03502 1.0566 8.98113 2.00272 8.98113 3.16981V3.16981M8.98113 6.07543H13.2075M13.2075 6.07543L11.0944 3.96226M13.2075 6.07543L11.0944 8.18859"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.0566 3.39756C1.0566 2.2763 2.18906 1.50959 3.23013 1.92601L4.67914 2.50562C5.68202 2.90677 6.33962 3.87807 6.33962 4.9582V10.3383C6.33962 11.4596 5.20717 12.2263 4.1661 11.8098L2.71708 11.2302C1.71421 10.8291 1.0566 9.85777 1.0566 8.77765V3.39756Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8.981" cy="8.981" r=".792" fill={color} />
    </svg>
  );
};

export default Logout12;
