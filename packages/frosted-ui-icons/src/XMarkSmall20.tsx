import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.4706 5.46983C13.7635 5.17728 14.2384 5.17705 14.5311 5.46983C14.8234 5.76265 14.8235 6.23764 14.5311 6.53038L11.0604 10.0001L14.5311 13.4698C14.8234 13.7626 14.8235 14.2376 14.5311 14.5304C14.2384 14.8231 13.7635 14.8228 13.4706 14.5304L9.99989 11.0606L6.53017 14.5304C6.23733 14.8232 5.76253 14.8231 5.46962 14.5304C5.17683 14.2375 5.17676 13.7627 5.46962 13.4698L8.93935 10.0001L5.46962 6.53038C5.17681 6.23756 5.17697 5.76274 5.46962 5.46983C5.76253 5.17711 6.23733 5.17699 6.53017 5.46983L9.99989 8.93955L13.4706 5.46983Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmall20.category = 'Interface General';

export default XMarkSmall20;
