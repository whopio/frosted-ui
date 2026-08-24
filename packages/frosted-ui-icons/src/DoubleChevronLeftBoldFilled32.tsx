import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftBoldFilled32"
      {...props}
    >
      <path
        d="M19.27 3.31c.585-.586.585-1.535 0-2.121-.587-.586-1.536-.586-2.122 0L3.98 14.357c-.91.91-.91 2.386 0 3.296l13.168 13.164c.586.585 1.535.586 2.121 0 .586-.586.586-1.535 0-2.121L6.575 16.006 19.269 3.31zm9 0c.585-.586.585-1.535 0-2.121-.587-.586-1.536-.586-2.122 0L12.98 14.357c-.91.91-.91 2.386 0 3.296l13.168 13.164c.586.585 1.535.585 2.121 0 .586-.586.586-1.535 0-2.121l-12.694-12.69L28.269 3.31z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftBoldFilled32.category = 'Arrows';

export default DoubleChevronLeftBoldFilled32;
