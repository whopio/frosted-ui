import * as React from 'react';
import { IconProps } from './types';

export const XMarkBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkBoldFilled16"
      {...props}
    >
      <path
        d="M11.94 1.94c.585-.586 1.535-.586 2.12 0 .586.585.586 1.535 0 2.12L10.121 8l3.94 3.94c.585.585.585 1.535 0 2.12-.586.586-1.536.586-2.122 0L8 10.122l-3.939 3.94c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.536 0-2.121L5.878 8l-3.94-3.94c-.585-.585-.585-1.535 0-2.12.586-.586 1.536-.586 2.121 0L8 5.878l3.94-3.94z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkBoldFilled16.category = 'Interface General';

export default XMarkBoldFilled16;
