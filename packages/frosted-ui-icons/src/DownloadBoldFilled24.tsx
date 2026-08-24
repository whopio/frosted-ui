import * as React from 'react';
import { IconProps } from './types';

export const DownloadBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DownloadBoldFilled24"
      {...props}
    >
      <path
        d="M21.75 20.25c.828 0 1.5.672 1.5 1.5 0 .829-.672 1.5-1.5 1.5H2.25c-.828 0-1.5-.671-1.5-1.5 0-.828.672-1.5 1.5-1.5h19.5zM12 .75c.828 0 1.5.672 1.5 1.5v11.63l4.19-4.19c.585-.586 1.535-.586 2.12 0 .586.586.586 1.535 0 2.12l-6.75 6.75c-.548.55-1.417.584-2.006.104l-.114-.103-6.75-6.75c-.586-.586-.586-1.535 0-2.121.585-.586 1.535-.586 2.12 0l4.19 4.19V2.25c0-.828.672-1.5 1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

DownloadBoldFilled24.category = 'Arrows';

export default DownloadBoldFilled24;
