import * as React from 'react';
import { IconProps } from './types';

export const VideoFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M31 23.25C31 25.8734 28.8734 28 26.25 28H5.75C3.12665 28 1 25.8734 1 23.25V13H31V23.25ZM13.3984 15.9229C13.0652 15.7327 12.6506 15.9728 12.6504 16.3564V24.1475C12.6505 24.5302 13.0632 24.7713 13.3965 24.583L20.2568 20.707C20.5947 20.5161 20.5958 20.0293 20.2588 19.8369L13.3984 15.9229ZM2.25293 11.5H1V8.75C1 6.12665 3.12665 4 5.75 4H9.75195L2.25293 11.5ZM26.25 4C26.6537 4 27.0457 4.04976 27.4199 4.14453L20.0654 11.5H13.374L20.873 4H26.25ZM28.8867 4.79883C30.1608 5.65076 31 7.10226 31 8.75V11.5H22.1865L28.8867 4.79883ZM11.2529 11.5H4.37402L11.873 4H18.752L11.2529 11.5Z"
        fill={color}
      />
    </svg>
  );
};

VideoFilled32.category = 'Objects';

export default VideoFilled32;
