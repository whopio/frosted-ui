import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 2.25C9.60561 2.25 10.9892 3.19648 11.626 4.56152L11.9854 4.23438L12.0957 4.14062C13.255 3.23147 14.9988 4.04813 14.999 5.56348V10.4365C14.9988 12.0008 13.1406 12.8204 11.9854 11.7656L11.626 11.4375C10.9894 12.803 9.60592 13.75 8 13.75H5C2.79086 13.75 1 11.9591 1 9.75V6.25C1 4.04086 2.79086 2.25 5 2.25H8ZM5 4.25C3.89543 4.25 3 5.14543 3 6.25V9.75C3 10.8546 3.89543 11.75 5 11.75H8C9.10457 11.75 10 10.8546 10 9.75V6.25C10 5.14543 9.10457 4.25 8 4.25H5ZM12 6.92773V9.07129L12.999 9.98242V6.0166L12 6.92773Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnBold16.category = 'Product Icons';

export default WebcamOnBold16;
