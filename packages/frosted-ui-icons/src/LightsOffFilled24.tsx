import * as React from 'react';
import { IconProps } from './types';

export const LightsOffFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.4004 22.5C14.8144 22.5002 15.1504 22.8359 15.1504 23.25C15.1504 23.6641 14.8144 23.9998 14.4004 24H9.59961C9.18558 23.9998 8.84961 23.6641 8.84961 23.25C8.84961 22.8359 9.18558 22.5002 9.59961 22.5H14.4004ZM12 5C16.0763 5 19 8.09774 19 12C19 14.5993 17.4319 16.2213 16.3818 17.0146C15.9755 17.3216 15.75 17.7299 15.75 18.1006L15.7461 18.25C15.6682 19.7818 14.4017 20.9999 12.8506 21H11.1494C9.54817 20.9999 8.25013 19.7018 8.25 18.1006C8.25 17.7299 8.02448 17.3216 7.61816 17.0146C6.56814 16.2213 5 14.5993 5 12C5 8.09774 7.92371 5 12 5Z"
        fill={color}
      />
    </svg>
  );
};

export default LightsOffFilled24;
