import * as React from 'react';
import { IconProps } from './types';

export const MegaphoneFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MegaphoneFilled20"
      {...props}
    >
      <path
        d="M12.72 1.14C14.338.61 16 1.813 16 3.513v11.95c0 1.71-1.678 2.914-3.298 2.369l-4.306-1.45c-.195-.066-.396.079-.396.284v1.583c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.178l6.22-2.039zM5 15.237l-1.787-.602C1.89 14.191 1 12.951 1 11.556v-4.22c0-1.404.903-2.65 2.237-3.087L5 3.67v11.567zm12.5-8.79c.327.22.645.512.904.901.372.559.594 1.27.594 2.15 0 .882-.222 1.593-.594 2.151-.259.389-.577.681-.904.902V6.448z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MegaphoneFilled20.category = 'Objects';

export default MegaphoneFilled20;
