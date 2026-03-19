import * as React from 'react';
import { IconProps } from './types';

export const UploadBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M30 28.9999C30.5523 28.9999 31 29.4476 31 29.9999C31 30.5522 30.5523 30.9999 30 30.9999H2C1.44772 30.9999 1 30.5522 1 29.9999C1 29.4476 1.44772 28.9999 2 28.9999H30ZM15.293 1.29289C15.6835 0.902374 16.3165 0.902368 16.707 1.29289L26.707 11.2929C27.0975 11.6834 27.0975 12.3164 26.707 12.707C26.3165 13.0975 25.6835 13.0975 25.293 12.707L17 4.41398V24.9999C17 25.5522 16.5523 25.9999 16 25.9999C15.4477 25.9999 15 25.5522 15 24.9999V4.41398L6.70703 12.707C6.31651 13.0975 5.68349 13.0975 5.29297 12.707C4.90244 12.3164 4.90244 11.6834 5.29297 11.2929L15.293 1.29289Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UploadBold32.category = 'Arrows';

export default UploadBold32;
