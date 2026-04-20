import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM14.0742 9.13477C12.7429 8.28755 11.0003 9.24333 11 10.8213V21.1787C11.0003 22.7567 12.7429 23.7125 14.0742 22.8652L22.2109 17.6875C23.4459 16.9016 23.4459 15.0984 22.2109 14.3125L14.0742 9.13477Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleBoldFilled32.category = 'Sound & Music';

export default PlayCircleBoldFilled32;
