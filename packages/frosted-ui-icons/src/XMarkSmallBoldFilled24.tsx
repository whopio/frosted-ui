import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmallBoldFilled24"
      {...props}
    >
      <path
        d="M15.94 5.94c.585-.586 1.535-.586 2.12 0 .586.585.586 1.535 0 2.12L14.121 12l3.94 3.94c.585.585.585 1.535 0 2.12-.586.586-1.536.586-2.122 0L12 14.122l-3.939 3.94c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.536 0-2.121L9.878 12l-3.94-3.94c-.585-.585-.585-1.535 0-2.12.586-.586 1.536-.586 2.121 0L12 9.879l3.94-3.94z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmallBoldFilled24.category = 'Interface General';

export default XMarkSmallBoldFilled24;
