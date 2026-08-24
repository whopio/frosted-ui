import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRight16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleRight16"
      {...props}
    >
      <path
        d="M1.75 2.5c-.414 0-.75.336-.75.75V8.5c0 1.105.895 2 2 2h9.382l-2.137 1.945c-.306.28-.328.754-.05 1.06.28.306.754.328 1.06.05l3.5-3.188c.154-.14.243-.34.245-.548.002-.208-.083-.408-.234-.551l-3.5-3.313c-.301-.285-.776-.271-1.061.03-.285.3-.271.775.03 1.06L12.3 9H3c-.276 0-.5-.224-.5-.5V3.25c0-.414-.336-.75-.75-.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleRight16.category = 'Arrows';

export default ArrowDownAngleRight16;
