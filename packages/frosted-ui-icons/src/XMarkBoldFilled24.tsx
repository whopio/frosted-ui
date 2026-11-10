import * as React from 'react';
import { IconProps } from './types';

export const XMarkBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkBoldFilled24"
      {...props}
    >
      <path
        d="M19.94 1.938c.585-.585 1.535-.585 2.12 0 .586.586.586 1.537 0 2.123L14.122 12l7.94 7.94c.585.585.585 1.536 0 2.121-.586.585-1.536.586-2.122 0L12 14.121l-7.94 7.94c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.536 0-2.122L9.877 12 1.939 4.06c-.585-.585-.585-1.535 0-2.12.586-.586 1.536-.586 2.122 0L12 9.878l7.94-7.94z"
        fill={color}
      />
    </svg>
  );
};

XMarkBoldFilled24.category = 'Interface General';

export default XMarkBoldFilled24;
