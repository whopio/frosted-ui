import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOnBold12"
      {...props}
    >
      <path
        d="M5.75 1.5c1.26 0 2.353.718 2.892 1.768L9.6 2.55l.094-.066C10.676 1.854 12 2.553 12 3.75v4.5c0 1.236-1.412 1.942-2.4 1.2l-.958-.719C8.102 9.781 7.01 10.5 5.75 10.5h-2.5C1.455 10.5 0 9.045 0 7.25v-2.5C0 2.955 1.455 1.5 3.25 1.5h2.5zm-2.5 2C2.56 3.5 2 4.06 2 4.75v2.5c0 .69.56 1.25 1.25 1.25h2.5C6.44 8.5 7 7.94 7 7.25v-2.5c0-.69-.56-1.25-1.25-1.25h-2.5zM9 5.499V6.5l1 .75V4.749l-1 .75z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnBold12.category = 'Interface General';

export default WebcamOnBold12;
