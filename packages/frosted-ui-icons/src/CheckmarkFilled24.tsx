import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkFilled24"
      {...props}
    >
      <path
        d="M21.365 4.117c.488-.488 1.28-.49 1.768-.002s.489 1.28.002 1.768L9.069 19.973c-.234.234-.552.367-.884.367-.331 0-.65-.132-.884-.366L.866 13.538c-.488-.488-.488-1.28 0-1.767.488-.488 1.28-.488 1.768 0l5.55 5.55L21.364 4.116z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkFilled24.category = 'Checkmarks';

export default CheckmarkFilled24;
