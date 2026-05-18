import * as React from 'react';
import { IconProps } from './types';

export const ThumbDownFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.27535 11.7918H3.12533C2.25089 11.7918 1.54199 11.083 1.54199 10.2085V3.9585C1.54199 3.08402 2.25089 2.37516 3.12533 2.37516H14.5187C16.1248 2.37516 17.49 3.54841 17.7316 5.13624L18.4291 9.71958C18.7284 11.6866 17.2058 13.4585 15.2161 13.4585H11.7231L12.0678 15.6695C12.2966 17.1373 11.1569 18.4585 9.67616 18.4585C9.08439 18.4585 8.53956 18.1283 8.2676 17.6003L5.27535 11.7918ZM4.87533 3.87516V10.2918H3.12533C3.0793 10.2918 3.04199 10.2545 3.04199 10.2085V3.9585C3.04199 3.91247 3.0793 3.87516 3.12533 3.87516H4.87533Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ThumbDownFilled20.category = 'Interface General';

export default ThumbDownFilled20;
