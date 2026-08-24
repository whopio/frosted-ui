import * as React from 'react';
import { IconProps } from './types';

export const PercentageBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PercentageBoldFilled32"
      {...props}
    >
      <path
        d="M28.44 1.44c.585-.586 1.535-.586 2.12 0 .586.585.586 1.535 0 2.12l-27 27c-.585.586-1.535.586-2.12 0-.586-.585-.586-1.535 0-2.12l27-27zM25 19c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 3c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM7 1c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 3C5.343 4 4 5.343 4 7s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"
        fill={color}
      />
    </svg>
  );
};

PercentageBoldFilled32.category = 'Money & Shopping';

export default PercentageBoldFilled32;
