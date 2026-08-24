import * as React from 'react';
import { IconProps } from './types';

export const DownloadBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DownloadBold16"
      {...props}
    >
      <path
        d="M14 13c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h12zM8 1c.552 0 1 .448 1 1v6.586l2.293-2.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-4 4c-.366.366-.945.389-1.338.068l-.076-.068-4-4c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0L7 8.586V2c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

DownloadBold16.category = 'Arrows';

export default DownloadBold16;
