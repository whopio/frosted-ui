import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowLeftRight32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowLeftRight32"
      {...props}
    >
      <path
        d="M24.53 17.218c-.293-.293-.767-.293-1.06 0-.293.293-.293.768 0 1.06l4.969 4.97H1.748c-.414 0-.75.336-.75.75 0 .415.336.75.75.75h26.69l-4.97 4.97c-.292.292-.292.767 0 1.06.294.293.768.293 1.061 0l6.25-6.25c.292-.292.292-.767 0-1.06l-6.25-6.25zm-16.002-16c-.293-.293-.767-.293-1.06 0l-6.25 6.25c-.292.293-.292.768 0 1.06l6.25 6.25c.293.293.767.293 1.06 0 .293-.293.293-.768 0-1.06L3.56 8.747h26.689c.414 0 .75-.335.75-.75 0-.414-.336-.75-.75-.75H3.559l4.97-4.97c.292-.292.292-.767 0-1.06z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowLeftRight32.category = 'Arrows';

export default DoubleArrowLeftRight32;
