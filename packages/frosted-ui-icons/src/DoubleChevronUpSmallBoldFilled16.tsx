import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmallBoldFilled16"
      {...props}
    >
      <path
        d="M10.323 8.056c.586.586 1.535.585 2.121 0 .586-.586.586-1.536 0-2.121L9.297 2.787c-.716-.715-1.877-.715-2.593 0L3.556 5.935c-.585.585-.585 1.535 0 2.12.586.587 1.536.587 2.122 0L8 5.735l2.323 2.322zm0 5.25c.586.586 1.535.586 2.121 0 .586-.586.586-1.536 0-2.121L9.297 8.037c-.716-.715-1.877-.715-2.593 0l-3.148 3.148c-.585.585-.585 1.535 0 2.12.586.587 1.536.587 2.122 0L8 10.984l2.323 2.323z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallBoldFilled16.category = 'Arrows';

export default DoubleChevronUpSmallBoldFilled16;
