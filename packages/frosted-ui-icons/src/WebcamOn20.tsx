import * as React from 'react';
import { IconProps } from './types';

export const WebcamOn20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOn20"
      {...props}
    >
      <path
        d="M10.25 3c2.195 0 4.042 1.49 4.586 3.514l1.233-1.127C17.192 4.36 19 5.157 19 6.677v6.65c0 1.52-1.808 2.318-2.93 1.291l-1.235-1.129C14.29 15.511 12.445 17 10.25 17h-4.5C3.127 17 1 14.873 1 12.25v-4.5C1 5.127 3.127 3 5.75 3h4.5zm-4.5 1.5C3.955 4.5 2.5 5.955 2.5 7.75v4.5c0 1.795 1.455 3.25 3.25 3.25h4.5c1.795 0 3.25-1.455 3.25-3.25v-4.5c0-1.795-1.455-3.25-3.25-3.25h-4.5zM17.5 6.678c0-.217-.259-.331-.419-.185l-2.075 1.899-.006.004v3.212l.006.005 2.075 1.898c.16.147.419.033.419-.185V6.678z"
        fill={color}
      />
    </svg>
  );
};

WebcamOn20.category = 'Interface General';

export default WebcamOn20;
