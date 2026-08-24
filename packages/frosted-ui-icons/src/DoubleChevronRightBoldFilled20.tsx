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
        d="M8.664 3.336c-.586-.586-.586-1.536 0-2.121.586-.586 1.535-.586 2.121 0L18.2 8.63c.773.773.772 2.026-.001 2.798l-7.414 7.412c-.586.585-1.535.585-2.121 0-.586-.586-.586-1.536 0-2.122l6.692-6.688-6.692-6.694zm-7 0c-.586-.586-.586-1.536 0-2.121.586-.586 1.535-.586 2.121 0L11.2 8.63c.773.773.772 2.026-.001 2.798L3.785 18.84c-.586.585-1.535.585-2.121 0-.586-.586-.586-1.536 0-2.122l6.692-6.688-6.692-6.694z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBoldFilled20.category = 'Arrows';

export default DoubleChevronRightBoldFilled20;
