import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.75391 4C1.33969 4 1.00391 4.33579 1.00391 4.75V13.375C1.00391 14.8247 2.17916 16 3.62891 16H20.3652L17.2383 18.9551C16.9375 19.2396 16.9246 19.7147 17.209 20.0156C17.4935 20.3164 17.9686 20.3294 18.2695 20.0449L22.7656 15.7949C22.9154 15.6533 23 15.4562 23 15.25C23 15.0438 22.9154 14.8467 22.7656 14.7051L18.2695 10.4551C17.9686 10.1706 17.4935 10.1836 17.209 10.4844C16.9246 10.7853 16.9375 11.2604 17.2383 11.5449L20.3652 14.5H3.62891C3.00759 14.5 2.50391 13.9963 2.50391 13.375V4.75C2.50391 4.33579 2.16812 4 1.75391 4Z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleRight24.category = 'Arrows';

export default ArrowDownAngleRight24;
