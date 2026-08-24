import * as React from 'react';
import { IconProps } from './types';

export const Bold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Bold24"
      {...props}
    >
      <path
        d="M13.252 3c2.623 0 4.75 2.127 4.75 4.75V8c0 1.489-.686 2.817-1.758 3.688 1.628.753 2.758 2.4 2.758 4.312v.25c0 2.623-2.127 4.75-4.75 4.75h-7.51c-.966 0-1.75-.784-1.75-1.75V4.75c0-.966.784-1.75 1.75-1.75h6.51zm-6.76 16.25c0 .138.112.25.25.25h7.51c1.795 0 3.25-1.455 3.25-3.25V16c0-1.795-1.455-3.25-3.25-3.25h-7.76v6.5zm.25-14.75c-.138 0-.25.112-.25.25v6.5h6.76c1.795 0 3.25-1.455 3.25-3.25v-.25c0-1.795-1.455-3.25-3.25-3.25h-6.51z"
        fill={color}
      />
    </svg>
  );
};

Bold24.category = 'Text Formatting';

export default Bold24;
