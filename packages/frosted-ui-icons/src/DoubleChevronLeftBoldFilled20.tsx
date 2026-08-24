import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftBoldFilled20"
      {...props}
    >
      <path
        d="M11.34 3.336c.585-.586.585-1.536 0-2.121-.586-.586-1.536-.586-2.122 0L1.803 8.63c-.772.773-.771 2.026.001 2.798l7.414 7.412c.586.585 1.536.585 2.121 0 .586-.586.586-1.536 0-2.122L4.647 10.03l6.692-6.694zm7 0c.585-.586.585-1.536 0-2.121-.586-.586-1.536-.586-2.122 0L8.803 8.63c-.772.773-.771 2.026.001 2.798l7.414 7.412c.586.585 1.536.585 2.122 0 .585-.586.585-1.536 0-2.122l-6.693-6.688 6.693-6.694z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftBoldFilled20.category = 'Arrows';

export default DoubleChevronLeftBoldFilled20;
