import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmallBoldFilled32"
      {...props}
    >
      <path
        d="M24.19 8.94c.585-.586 1.535-.586 2.12 0 .586.585.586 1.535 0 2.12l-13.5 13.5c-.585.586-1.535.586-2.12 0l-6-6c-.586-.585-.586-1.535 0-2.12.585-.586 1.535-.586 2.12 0l4.94 4.939 12.44-12.44z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBoldFilled32.category = 'Checkmarks';

export default CheckmarkSmallBoldFilled32;
