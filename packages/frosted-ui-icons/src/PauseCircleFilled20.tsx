import * as React from 'react';
import { IconProps } from './types';

export const PauseCircleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM7 6C6.44772 6 6 6.44772 6 7V13C6 13.5523 6.44772 14 7 14H7.5C8.05228 14 8.5 13.5523 8.5 13V7C8.5 6.44772 8.05228 6 7.5 6H7ZM12.5 6C11.9477 6 11.5 6.44772 11.5 7V13C11.5 13.5523 11.9477 14 12.5 14H13C13.5523 14 14 13.5523 14 13V7C14 6.44772 13.5523 6 13 6H12.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PauseCircleFilled20.category = 'Sound & Music';

export default PauseCircleFilled20;
