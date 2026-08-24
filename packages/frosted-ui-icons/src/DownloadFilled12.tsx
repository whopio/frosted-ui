import * as React from 'react';
import { IconProps } from './types';

export const DownloadFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DownloadFilled12"
      {...props}
    >
      <path
        d="M10.75 9.5c.69 0 1.25.56 1.25 1.25S11.44 12 10.75 12h-9.5C.56 12 0 11.44 0 10.75S.56 9.5 1.25 9.5h9.5zM6 0c.69 0 1.25.56 1.25 1.25v3.232l1.116-1.116c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768l-3.25 3.25c-.458.457-1.182.486-1.673.086l-.095-.086-3.25-3.25c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0L4.75 4.482V1.25C4.75.56 5.31 0 6 0z"
        fill={color}
      />
    </svg>
  );
};

DownloadFilled12.category = 'Arrows';

export default DownloadFilled12;
