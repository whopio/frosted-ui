import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeft32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M20.503 30.9998C26.3025 30.9997 31.004 26.2982 31.004 20.4988C31.0038 14.6995 26.3024 9.99782 20.503 9.9978H3.54111L11.2218 2.27905C11.5138 1.98563 11.5129 1.51073 11.2198 1.21851C10.9263 0.926432 10.4515 0.927168 10.1593 1.22046L1.21982 10.2029C0.928675 10.4955 0.928685 10.9689 1.21982 11.2615L10.1593 20.2439C10.4515 20.5368 10.9264 20.5378 11.2198 20.2458C11.5131 19.9537 11.5137 19.4789 11.2218 19.1853L3.57236 11.4978H20.503C25.4739 11.4978 29.5038 15.5279 29.504 20.4988C29.504 25.4698 25.474 29.4997 20.503 29.4998H16.5851C16.171 29.4998 15.8352 29.8357 15.8351 30.2498C15.8351 30.6639 16.1709 30.9998 16.5851 30.9998H20.503Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeft32.category = 'Arrows';

export default RoundedArrowAngleLeft32;
