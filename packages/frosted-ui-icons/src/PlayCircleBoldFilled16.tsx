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
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM7.3125 4.36523C6.50467 3.95225 5.50004 4.53221 5.5 5.48242V10.5176C5.50004 11.531 6.64272 12.1232 7.4707 11.5391L11.0371 9.02148C11.7426 8.52346 11.7426 7.47653 11.0371 6.97852L7.4707 4.46094L7.3125 4.36523Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleBoldFilled16.category = 'Sound & Music';

export default PlayCircleBoldFilled16;
