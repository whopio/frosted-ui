import * as React from 'react';
import { IconProps } from './types';

export const CommandBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CommandBoldFilled24"
      {...props}
    >
      <path
        d="M8.25 8.25V5c0-1.795-1.455-3.25-3.25-3.25S1.75 3.205 1.75 5 3.205 8.25 5 8.25h3.25zm0 0v7.5m0-7.5h7.5m-7.5 7.5h7.5m-7.5 0H5c-1.795 0-3.25 1.455-3.25 3.25S3.205 22.25 5 22.25 8.25 20.795 8.25 19v-3.25zm7.5 0v-7.5m0 7.5V19c0 1.795 1.455 3.25 3.25 3.25s3.25-1.455 3.25-3.25-1.455-3.25-3.25-3.25h-3.25zm0-7.5V5c0-1.795 1.455-3.25 3.25-3.25S22.25 3.205 22.25 5 20.795 8.25 19 8.25h-3.25z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

CommandBoldFilled24.category = 'Interface General';

export default CommandBoldFilled24;
