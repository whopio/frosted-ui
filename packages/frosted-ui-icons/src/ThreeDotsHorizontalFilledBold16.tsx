import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalFilledBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.75 5.875C3.92361 5.875 4.875 6.82639 4.875 8C4.875 9.17361 3.92361 10.125 2.75 10.125C1.57639 10.125 0.625 9.17361 0.625 8C0.625 6.82639 1.57639 5.875 2.75 5.875ZM8 5.875C9.1736 5.875 10.125 6.82639 10.125 8C10.125 9.17361 9.1736 10.125 8 10.125C6.8264 10.125 5.875 9.17361 5.875 8C5.875 6.82639 6.8264 5.875 8 5.875ZM13.25 5.875C14.4236 5.875 15.375 6.82639 15.375 8C15.375 9.17361 14.4236 10.125 13.25 10.125C12.0764 10.125 11.125 9.17361 11.125 8C11.125 6.82639 12.0764 5.875 13.25 5.875Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ThreeDotsHorizontalFilledBold16.category = 'Interface General';

export default ThreeDotsHorizontalFilledBold16;
