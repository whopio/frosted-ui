import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmall32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmall32"
      {...props}
    >
      <path
        d="M22.054 17.063c.293.292.768.292 1.06-.002.292-.293.291-.768-.002-1.06L17 9.913c-.553-.55-1.447-.55-2 0L8.888 16c-.294.292-.295.767-.002 1.06.292.294.767.294 1.06.002L16 11.034l6.054 6.03zm0 5.225c.293.292.768.291 1.06-.002.292-.294.292-.768-.002-1.06L17 15.137c-.553-.551-1.447-.55-2 0l-6.112 6.087c-.294.293-.295.767-.002 1.061.292.293.767.294 1.06.002L16 16.258l6.054 6.03z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmall32.category = 'Arrows';

export default DoubleChevronUpSmall32;
