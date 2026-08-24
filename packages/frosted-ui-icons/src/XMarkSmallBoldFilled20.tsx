import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XMarkSmallBoldFilled20"
      {...props}
    >
      <path
        d="M12.938 4.939c.586-.586 1.537-.586 2.122 0 .586.585.586 1.536 0 2.122L12.121 10l2.94 2.939c.585.585.585 1.535 0 2.12-.586.586-1.537.586-2.123 0l-2.94-2.939-2.939 2.94c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.536 0-2.121L7.877 10l-2.94-2.94c-.585-.585-.585-1.536 0-2.121.586-.586 1.536-.586 2.121 0L10 7.879l2.94-2.94z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmallBoldFilled20.category = 'Interface General';

export default XMarkSmallBoldFilled20;
