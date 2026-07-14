import * as React from 'react';
import { IconProps } from './types';

export const VideoFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M20 14.833C20 16.5819 18.5819 18 16.833 18H3.16699C1.41809 18 0 16.5819 0 14.833V8.5H20V14.833ZM8.26465 10.0635C8.0458 9.93868 7.77366 10.0968 7.77344 10.3486V15.4668C7.77376 15.718 8.04486 15.8756 8.26367 15.752L12.7695 13.2061C12.9914 13.0807 12.9927 12.7612 12.7715 12.6348L8.26465 10.0635ZM1.19824 7H0V5.16699C0 3.41809 1.41809 2 3.16699 2H6.19727L1.19824 7ZM16.833 2C16.9901 2 17.1449 2.01111 17.2959 2.0332L12.3311 7H8.94434L13.9434 2H16.833ZM18.7793 2.67188C19.5212 3.25143 20 4.15255 20 5.16699V7H14.4521L18.7793 2.67188ZM6.82324 7H3.31934L8.31836 2H11.8223L6.82324 7Z"
        fill={color}
      />
    </svg>
  );
};

VideoFilled20.category = 'Objects';

export default VideoFilled20;
