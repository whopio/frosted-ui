import * as React from 'react';
import { IconProps } from './types';

export const DownloadBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DownloadBold20"
      {...props}
    >
      <path
        d="M18 17c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h16zM10 1c.552 0 1 .448 1 1v10.086l4.293-4.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.023 0 1.414l-6 6c-.366.366-.946.389-1.339.068l-.075-.068-6-6c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0L9 12.086V2c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

DownloadBold20.category = 'Arrows';

export default DownloadBold20;
