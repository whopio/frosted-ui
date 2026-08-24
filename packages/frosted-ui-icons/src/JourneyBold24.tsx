import * as React from 'react';
import { IconProps } from './types';

export const JourneyBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="JourneyBold24"
      {...props}
    >
      <path
        d="M19.25 1C21.321 1 23 2.679 23 4.75c0 2.071-1.679 3.75-3.75 3.75-1.725 0-3.177-1.165-3.614-2.75H5.625C4.175 5.75 3 6.925 3 8.375S4.175 11 5.625 11h12.75C20.929 11 23 13.07 23 15.625c0 2.554-2.07 4.625-4.625 4.625H8.365C7.926 21.835 6.474 23 4.75 23 2.679 23 1 21.321 1 19.25c0-2.071 1.679-3.75 3.75-3.75 1.725 0 3.177 1.165 3.614 2.75h10.011c1.45 0 2.625-1.175 2.625-2.625S19.825 13 18.375 13H5.625C3.071 13 1 10.93 1 8.375 1 5.821 3.07 3.75 5.625 3.75h10.01C16.074 2.165 17.526 1 19.25 1zM4.75 17.5c-.966 0-1.75.784-1.75 1.75S3.784 21 4.75 21s1.75-.784 1.75-1.75-.784-1.75-1.75-1.75zM19.25 3c-.966 0-1.75.784-1.75 1.75s.784 1.75 1.75 1.75S21 5.716 21 4.75 20.216 3 19.25 3z"
        fill={color}
      />
    </svg>
  );
};

JourneyBold24.category = 'Interface General';

export default JourneyBold24;
