import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracket20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFromBracket20"
      {...props}
    >
      <path
        d="M18.25 10c.414 0 .75.336.75.75v3c0 2.9-2.35 5.25-5.25 5.25h-7.5C3.35 19 1 16.65 1 13.75v-3c0-.414.336-.75.75-.75s.75.336.75.75v3c0 2.071 1.679 3.75 3.75 3.75h7.5c2.071 0 3.75-1.679 3.75-3.75v-3c0-.414.336-.75.75-.75zM9.175 1.342c.427-.427 1.103-.454 1.561-.08l.09.08 4.705 4.706c.293.293.293.768 0 1.06-.293.293-.768.293-1.061 0l-3.72-3.72v8.862c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.39l-3.72 3.72c-.293.292-.767.292-1.06 0-.293-.293-.293-.768 0-1.061l4.705-4.706z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracket20.category = 'Arrows';

export default ArrowUpFromBracket20;
