import * as React from 'react';
import { IconProps } from './types';

export const PercentageFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PercentageFilled32"
      {...props}
    >
      <path
        d="M28.866 1.366c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768l-27.5 27.5c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768l27.5-27.5zM25 19c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 2.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5zM7 1c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 2.5C5.067 3.5 3.5 5.067 3.5 7s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5S8.933 3.5 7 3.5z"
        fill={color}
      />
    </svg>
  );
};

PercentageFilled32.category = 'Money & Shopping';

export default PercentageFilled32;
