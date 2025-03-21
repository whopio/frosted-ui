import * as React from 'react';
import { IconProps } from './types';

export const Messages20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.3748 11.875H16.0433C16.9637 11.875 17.7099 11.1288 17.7099 10.2083V4.79167C17.7099 3.87119 16.9637 3.125 16.0433 3.125H7.50155C6.58107 3.125 5.83488 3.87119 5.83488 4.79167V6.45833M12.7099 6.45833H3.95988C3.0394 6.45833 2.29321 7.20453 2.29321 8.125V13.5417C2.29321 14.4622 3.0394 15.2083 3.95988 15.2083H5.00155V17.2917L8.75159 15.2083H12.7099C13.6303 15.2083 14.3766 14.4622 14.3766 13.5417V8.125C14.3766 7.20453 13.6303 6.45833 12.7099 6.45833Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Messages20;
