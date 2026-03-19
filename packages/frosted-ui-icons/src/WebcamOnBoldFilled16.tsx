import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 2.25C9.60561 2.25 10.9892 3.19648 11.626 4.56152L11.9854 4.23438L12.0957 4.14062C13.255 3.23147 14.9988 4.04813 14.999 5.56348V10.4365C14.9988 12.0008 13.1406 12.8204 11.9854 11.7656L11.626 11.4375C10.9894 12.803 9.60592 13.75 8 13.75H5C2.79086 13.75 1 11.9591 1 9.75V6.25C1 4.04086 2.79086 2.25 5 2.25H8Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnBoldFilled16.category = 'Product Icons';

export default WebcamOnBoldFilled16;
