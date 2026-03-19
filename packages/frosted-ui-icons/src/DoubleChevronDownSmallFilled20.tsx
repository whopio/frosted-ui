import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.2825 9.86918C13.7705 9.38112 14.5618 9.38127 15.0501 9.86918C15.5381 10.3572 15.538 11.1485 15.0501 11.6368L11.179 15.5108C10.528 16.162 9.4715 16.1621 8.82057 15.5108L4.94948 11.6368C4.46159 11.1486 4.46149 10.3572 4.94948 9.86918C5.43767 9.38125 6.22901 9.38117 6.71706 9.86918L9.99928 13.1534L13.2825 9.86918ZM13.2825 4.36625C13.7705 3.87818 14.5618 3.8783 15.0501 4.36625C15.5381 4.85429 15.538 5.64562 15.0501 6.13383L11.179 10.0079C10.528 10.6591 9.47151 10.6591 8.82057 10.0079L4.94948 6.13383C4.46154 5.64563 4.46146 4.8543 4.94948 4.36625C5.43769 3.87831 6.22901 3.8782 6.71706 4.36625L9.99928 7.65043L13.2825 4.36625Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallFilled20.category = 'Arrows';

export default DoubleChevronDownSmallFilled20;
