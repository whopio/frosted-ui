import * as React from 'react';
import { IconProps } from './types';

export const DownloadBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DownloadBoldFilled32"
      {...props}
    >
      <path
        d="M29.75 28.25c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H2.25c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h27.5zM16 .75c.828 0 1.5.672 1.5 1.5V20.88l7.19-7.19c.585-.585 1.535-.585 2.12 0 .586.586.586 1.536 0 2.122l-9.75 9.75c-.585.585-1.535.585-2.12 0l-9.75-9.75c-.586-.586-.586-1.536 0-2.121.585-.586 1.535-.586 2.12 0l7.19 7.189V2.25c0-.828.672-1.5 1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

DownloadBoldFilled32.category = 'Arrows';

export default DownloadBoldFilled32;
