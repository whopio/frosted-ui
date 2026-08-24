import * as React from 'react';
import { IconProps } from './types';

export const DownloadFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DownloadFilled24"
      {...props}
    >
      <path
        d="M21.75 20.5c.69 0 1.25.56 1.25 1.25S22.44 23 21.75 23H2.25C1.56 23 1 22.44 1 21.75s.56-1.25 1.25-1.25h19.5zM12 1c.69 0 1.25.56 1.25 1.25v12.233l4.616-4.616c.488-.489 1.28-.489 1.768 0 .488.488.488 1.28 0 1.767l-6.75 6.75c-.458.458-1.182.486-1.673.086l-.095-.086-6.75-6.75c-.488-.488-.488-1.28 0-1.767.488-.489 1.28-.489 1.768 0l4.616 4.616V2.25c0-.69.56-1.25 1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

DownloadFilled24.category = 'Arrows';

export default DownloadFilled24;
