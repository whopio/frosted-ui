import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightBoldFilled20"
      {...props}
    >
      <path
        d="M8.663 3.336c-.585-.585-.585-1.535 0-2.12.586-.586 1.535-.586 2.121 0L18.2 8.63c.773.773.772 2.026 0 2.8l-7.415 7.41c-.586.585-1.535.586-2.12 0-.586-.585-.586-1.535 0-2.12l6.691-6.69-6.692-6.694zm-7 0c-.585-.585-.585-1.535 0-2.12.586-.586 1.535-.586 2.121 0L11.2 8.63c.773.773.772 2.026 0 2.8l-7.415 7.41c-.586.585-1.535.586-2.12 0-.586-.585-.586-1.535 0-2.12l6.691-6.69-6.692-6.694z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronRightBoldFilled20.category = 'Arrows';

export default DoubleChevronRightBoldFilled20;
