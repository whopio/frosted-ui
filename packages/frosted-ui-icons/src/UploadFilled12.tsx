import * as React from 'react';
import { IconProps } from './types';

export const UploadFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UploadFilled12"
      {...props}
    >
      <path
        d="M10.75 9.5c.69 0 1.25.56 1.25 1.25S11.44 12 10.75 12h-9.5C.56 12 0 11.44 0 10.75S.56 9.5 1.25 9.5h9.5zM5.21.28c.492-.4 1.216-.371 1.674.086l3.25 3.25c.488.488.488 1.28 0 1.768s-1.28.488-1.768 0L7.25 4.268V7c0 .69-.56 1.25-1.25 1.25S4.75 7.69 4.75 7V4.268L3.634 5.384c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768l3.25-3.25.095-.086z"
        fill={color}
      />
    </svg>
  );
};

UploadFilled12.category = 'Arrows';

export default UploadFilled12;
