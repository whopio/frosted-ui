import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5ZM10.1045 6.52832C9.13894 6.09719 8 6.79789 8 7.90234V16.0977C8 17.2757 9.29587 17.9944 10.2949 17.3701L16.8516 13.2725C17.7916 12.685 17.7916 11.315 16.8516 10.7275L10.2949 6.62988L10.1045 6.52832Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleBoldFilled24.category = 'Sound & Music';

export default PlayCircleBoldFilled24;
