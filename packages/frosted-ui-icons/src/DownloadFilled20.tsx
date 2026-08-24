import * as React from 'react';
import { IconProps } from './types';

export const DownloadFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DownloadFilled20"
      {...props}
    >
      <path
        d="M17.75 16.5c.69 0 1.25.56 1.25 1.25S18.44 19 17.75 19H2.25C1.56 19 1 18.44 1 17.75s.56-1.25 1.25-1.25h15.5zM10 1c.69 0 1.25.56 1.25 1.25v8.732l3.366-3.366c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768l-5.5 5.5c-.458.457-1.182.486-1.673.086l-.095-.086-5.5-5.5c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0l3.366 3.366V2.25C8.75 1.56 9.31 1 10 1z"
        fill={color}
      />
    </svg>
  );
};

DownloadFilled20.category = 'Arrows';

export default DownloadFilled20;
