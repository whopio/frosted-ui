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
      data-fui-icon="WebcamOnBold16"
      {...props}
    >
      <path
        d="M8 2.25c1.606 0 2.99.946 3.626 2.312l.36-.328.11-.093c1.159-.91 2.903-.093 2.903 1.422v4.874c0 1.564-1.858 2.383-3.014 1.329l-.359-.329C10.989 12.803 9.606 13.75 8 13.75H5c-2.21 0-4-1.79-4-4v-3.5c0-2.21 1.79-4 4-4h3zm-3 2c-1.105 0-2 .895-2 2v3.5c0 1.105.895 2 2 2h3c1.105 0 2-.895 2-2v-3.5c0-1.105-.895-2-2-2H5zm7 2.678V9.07l.999.911V6.017l-.999.91z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnBold16.category = 'Interface General';

export default WebcamOnBold16;
