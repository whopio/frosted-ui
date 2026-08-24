import * as React from 'react';
import { IconProps } from './types';

export const LogoutBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LogoutBold12"
      {...props}
    >
      <path
        d="M5.19 0c.944 0 1.85.375 2.517 1.043.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0C6 2.164 5.603 2 5.189 2H4c-1.105 0-2 .895-2 2v4c0 1.105.895 2 2 2h1.19c.413 0 .81-.164 1.103-.457.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414C7.039 11.625 6.134 12 5.189 12H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h1.19zm3.103 3.293c.39-.39 1.024-.39 1.414 0l2 2c.39.39.39 1.024 0 1.414l-2 2c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L8.586 7H5.5c-.552 0-1-.448-1-1s.448-1 1-1h3.086l-.293-.293c-.39-.39-.39-1.024 0-1.414z"
        fill={color}
      />
    </svg>
  );
};

LogoutBold12.category = 'Interface General';

export default LogoutBold12;
