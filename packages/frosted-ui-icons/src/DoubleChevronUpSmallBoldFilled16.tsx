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
        d="M10.323 8.057c.586.585 1.536.585 2.121 0 .586-.586.586-1.536 0-2.121L9.297 2.788c-.716-.716-1.877-.716-2.593 0L3.557 5.936c-.586.585-.586 1.535 0 2.12.585.586 1.535.586 2.12 0L8 5.735l2.323 2.323zm0 5.25c.586.585 1.536.585 2.121 0 .586-.586.586-1.536 0-2.122L9.297 8.038c-.716-.716-1.877-.716-2.593 0l-3.147 3.147c-.586.586-.586 1.536 0 2.122.585.585 1.535.585 2.12 0L8 10.984l2.323 2.323z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronUpSmallBoldFilled16.category = 'Arrows';

export default DoubleChevronUpSmallBoldFilled16;
