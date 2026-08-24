import * as React from 'react';
import { IconProps } from './types';

export const XMarkBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkBoldFilled32"
      {...props}
    >
      <path
        d="M27.94 1.94c.585-.586 1.535-.586 2.12 0 .586.585.586 1.535 0 2.12L18.121 16l11.94 11.94c.585.585.585 1.535 0 2.12-.586.586-1.536.586-2.122 0L16 18.121 4.06 30.061c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.536 0-2.122L13.878 16 1.939 4.06c-.585-.585-.585-1.535 0-2.12.586-.586 1.536-.586 2.121 0L16 13.878l11.94-11.94z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkBoldFilled32.category = 'Interface General';

export default XMarkBoldFilled32;
