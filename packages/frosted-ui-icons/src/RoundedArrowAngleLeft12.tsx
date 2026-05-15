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
        d="M7.62494 11.9999C10.0411 11.9999 11.9999 10.0411 11.9999 7.62494C11.9999 5.20873 10.0411 3.25001 7.62494 3.24994H2.56049L4.53022 1.28021C4.82303 0.987335 4.82303 0.512543 4.53022 0.219666C4.23734 -0.0732069 3.76257 -0.0731649 3.46967 0.219666L0.21967 3.46967C-0.0732232 3.76256 -0.0732232 4.23732 0.21967 4.53021L3.46967 7.78021C3.76257 8.07304 4.23734 8.07308 4.53022 7.78021C4.82303 7.48733 4.82303 7.01254 4.53022 6.71967L2.56049 4.74994H7.62494C9.2127 4.75001 10.4999 6.03716 10.4999 7.62494C10.4999 9.21272 9.2127 10.4999 7.62494 10.4999H6.74994C6.33573 10.4999 5.99994 10.8357 5.99994 11.2499C5.99994 11.6642 6.33573 11.9999 6.74994 11.9999H7.62494Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeft12.category = 'Arrows';

export default RoundedArrowAngleLeft12;
