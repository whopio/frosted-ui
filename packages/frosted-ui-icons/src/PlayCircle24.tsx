import * as React from 'react';
import { IconProps } from './types';

export const PlayCircle24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 1.875C17.5919 1.875 22.125 6.40812 22.125 12C22.125 17.5919 17.5919 22.125 12 22.125C6.40812 22.125 1.875 17.5919 1.875 12C1.875 6.40812 6.40812 1.875 12 1.875ZM12 3.375C7.23654 3.375 3.375 7.23654 3.375 12C3.375 16.7635 7.23654 20.625 12 20.625C16.7635 20.625 20.625 16.7635 20.625 12C20.625 7.23654 16.7635 3.375 12 3.375Z"
        fill={color}
      />
      <path
        d="M9 14.7447V9.25531C9 8.27352 10.0799 7.67496 10.9125 8.19531L15.304 10.94C16.0873 11.4296 16.0873 12.5704 15.304 13.06L10.9125 15.8047C10.0799 16.325 9 15.7265 9 14.7447Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PlayCircle24;
