import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM7.3125 4.36523C6.50467 3.95225 5.50004 4.53221 5.5 5.48242V10.5176C5.50004 11.531 6.64272 12.1232 7.4707 11.5391L11.0371 9.02148C11.7426 8.52346 11.7426 7.47653 11.0371 6.97852L7.4707 4.46094L7.3125 4.36523Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleBoldFilled16.category = 'Sound & Music';

export default PlayCircleBoldFilled16;
