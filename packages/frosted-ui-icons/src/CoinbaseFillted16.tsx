import * as React from 'react';
import { IconProps } from './types';

export const CoinbaseFillted16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8.08594 3.5C5.56933 3.50013 3.5 5.49883 3.5 8C3.5 10.5012 5.56933 12.4999 8.08594 12.5C9.95804 12.5 11.5767 11.3972 12.2881 9.80566C12.4568 9.4276 12.2872 8.9844 11.9092 8.81543C11.531 8.64641 11.088 8.81618 10.9189 9.19434C10.4463 10.2516 9.35994 11 8.08594 11C6.36544 10.9999 5 9.6408 5 8C5 6.3592 6.36544 5.00013 8.08594 5C9.35994 5 10.4463 5.74844 10.9189 6.80566C11.088 7.18382 11.531 7.35359 11.9092 7.18457C12.2872 7.0156 12.4568 6.5724 12.2881 6.19434C11.5767 4.60277 9.95804 3.5 8.08594 3.5Z"
        fill={color}
      />
    </svg>
  );
};

CoinbaseFillted16.category = 'Interface General';

export default CoinbaseFillted16;
