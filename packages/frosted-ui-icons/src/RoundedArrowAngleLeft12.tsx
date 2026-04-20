import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.62494 12C10.0411 11.9999 11.9999 10.0412 11.9999 7.625C11.9999 5.2088 10.0411 3.25007 7.62494 3.25H2.56049L4.53022 1.28027C4.82303 0.987396 4.82303 0.512604 4.53022 0.219727C4.23734 -0.0731459 3.76257 -0.0731039 3.46967 0.219727L0.21967 3.46973C-0.0732232 3.76262 -0.0732232 4.23738 0.21967 4.53027L3.46967 7.78027C3.76257 8.0731 4.23734 8.07315 4.53022 7.78027C4.82303 7.4874 4.82303 7.0126 4.53022 6.71973L2.56049 4.75H7.62494C9.2127 4.75007 10.4999 6.03722 10.4999 7.625C10.4999 9.21278 9.2127 10.4999 7.62494 10.5H6.74994C6.33573 10.5 5.99994 10.8358 5.99994 11.25C5.99994 11.6642 6.33573 12 6.74994 12H7.62494Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeft12.category = 'Arrows';

export default RoundedArrowAngleLeft12;
