import * as React from 'react';
import { IconProps } from './types';

export const XMark16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.9697 1.96962C13.2626 1.67691 13.7374 1.67679 14.0302 1.96962C14.3229 2.26246 14.3229 2.73729 14.0302 3.03017L9.06049 7.9999L14.0302 12.9696C14.3229 13.2625 14.323 13.7373 14.0302 14.0302C13.7374 14.3229 13.2625 14.3229 12.9697 14.0302L7.99994 9.06044L3.03021 14.0302C2.73735 14.323 2.26256 14.323 1.96967 14.0302C1.67678 13.7373 1.67678 13.2625 1.96967 12.9696L6.93939 7.9999L1.96967 3.03017C1.67681 2.73731 1.67688 2.26252 1.96967 1.96962C2.26257 1.67682 2.73735 1.67676 3.03021 1.96962L7.99994 6.93935L12.9697 1.96962Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMark16.category = 'Interface General';

export default XMark16;
