import * as React from 'react';
import { IconProps } from './types';

export const XMarkBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkBoldFilled20"
      {...props}
    >
      <path
        d="M15.94 1.94c.585-.586 1.535-.586 2.12 0 .586.585.586 1.535 0 2.12L12.121 10l5.94 5.94c.585.585.585 1.535 0 2.12-.586.586-1.536.586-2.122 0L10 12.122l-5.939 5.94c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.536 0-2.121L7.878 10l-5.94-5.94c-.585-.585-.585-1.535 0-2.12.586-.586 1.536-.586 2.121 0L10 7.879l5.94-5.94z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkBoldFilled20.category = 'Interface General';

export default XMarkBoldFilled20;
