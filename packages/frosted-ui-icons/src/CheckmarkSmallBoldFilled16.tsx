import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmallBoldFilled16"
      {...props}
    >
      <path
        d="M11.439 4.189c.585-.586 1.536-.586 2.122 0 .585.585.585 1.535 0 2.12l-6 6c-.586.587-1.536.587-2.122 0l-3-2.998c-.585-.586-.585-1.535 0-2.121.587-.586 1.536-.586 2.122 0L6.5 9.128l4.938-4.94z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBoldFilled16.category = 'Checkmarks';

export default CheckmarkSmallBoldFilled16;
