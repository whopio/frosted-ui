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
        d="M19.94 1.939c.586-.585 1.535-.585 2.121 0 .585.586.585 1.535 0 2.121L14.121 12l7.94 7.94c.585.586.586 1.535 0 2.121-.586.585-1.535.585-2.121 0L12 14.121l-7.939 7.94c-.586.585-1.536.585-2.122 0-.585-.587-.585-1.536 0-2.122l7.94-7.94-7.94-7.938c-.586-.585-.585-1.535 0-2.121.586-.586 1.536-.586 2.122 0L12 9.879l7.941-7.94z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkBoldFilled24.category = 'Interface General';

export default XMarkBoldFilled24;
