import * as React from 'react';
import { IconProps } from './types';

export const WebcamOn24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOn24"
      {...props}
    >
      <path
        d="M12.5 3.5c2.7 0 4.944 1.946 5.41 4.512l2.158-1.97c1.124-1.025 2.93-.229 2.93 1.292v9.342c0 1.52-1.806 2.317-2.93 1.292l-2.16-1.972c-.469 2.562-2.71 4.504-5.408 4.504h-6C3.462 20.5 1 18.038 1 15V9c0-3.038 2.462-5.5 5.5-5.5h6zM6.5 5c-2.21 0-4 1.79-4 4v6c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4V9c0-2.21-1.79-4-4-4h-6zm14.998 2.334c0-.217-.259-.33-.419-.185l-3.073 2.807L18 9.96v4.089l.006.005 3.073 2.806c.16.146.418.032.419-.184V7.334z"
        fill={color}
      />
    </svg>
  );
};

WebcamOn24.category = 'Interface General';

export default WebcamOn24;
