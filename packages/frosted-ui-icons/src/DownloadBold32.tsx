import * as React from 'react';
import { IconProps } from './types';

export const DownloadBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DownloadBold32"
      {...props}
    >
      <path
        d="M30 29c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h28zM16 1c.552 0 1 .448 1 1v20.586l8.293-8.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-10 10c-.39.39-1.024.39-1.414 0l-10-10c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0L15 22.586V2c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

DownloadBold32.category = 'Arrows';

export default DownloadBold32;
