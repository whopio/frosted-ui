import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmallBoldFilled20"
      {...props}
    >
      <path
        d="M14.69 5.44c.585-.586 1.535-.586 2.12 0 .586.585.586 1.535 0 2.12l-8 8c-.585.586-1.535.586-2.12 0l-3.5-3.5c-.586-.585-.586-1.535 0-2.12.585-.586 1.535-.586 2.12 0l2.44 2.44 6.94-6.94z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBoldFilled20.category = 'Checkmarks';

export default CheckmarkSmallBoldFilled20;
