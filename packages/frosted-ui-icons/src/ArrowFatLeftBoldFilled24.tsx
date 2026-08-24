import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatLeftBoldFilled24"
      {...props}
    >
      <path
        d="M13 18v2.661c0 1.384-1.657 2.094-2.66 1.14l-8.657-8.246c-.889-.846-.889-2.264 0-3.11L10.34 2.2C11.343 1.245 13 1.955 13 3.34V6h7.565C21.91 6 23 7.09 23 8.435v7.13C23 16.91 21.91 18 20.565 18H13z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatLeftBoldFilled24.category = 'Arrows';

export default ArrowFatLeftBoldFilled24;
