import * as React from 'react';
import { IconProps } from './types';

export const UploadFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UploadFilled24"
      {...props}
    >
      <path
        d="M21.75 20.5c.69 0 1.25.56 1.25 1.25S22.44 23 21.75 23H2.25C1.56 23 1 22.44 1 21.75s.56-1.25 1.25-1.25h19.5zM11.21 1.28c.492-.4 1.216-.371 1.674.087l6.75 6.75c.488.488.488 1.28 0 1.767-.488.488-1.28.488-1.768 0L13.25 5.268V17c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V5.268L6.134 9.884c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.767l6.75-6.75.095-.086z"
        fill={color}
      />
    </svg>
  );
};

UploadFilled24.category = 'Arrows';

export default UploadFilled24;
