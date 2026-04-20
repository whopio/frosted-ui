import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.3676 7.25L3.18412 7.25C2.39208 7.25 1.75 7.89208 1.75 8.68412L1.75 15.3159C1.75 16.1079 2.39208 16.75 3.18412 16.75H11.3676C11.5788 16.75 11.75 16.9212 11.75 17.1324V20.7072C11.75 21.2046 12.3398 21.4663 12.7086 21.1325L21.86 12.8506C22.3633 12.3952 22.3633 11.6048 21.86 11.1493L12.7086 2.86748C12.3398 2.53373 11.75 2.79542 11.75 3.29281V6.86757C11.75 7.07878 11.5788 7.25 11.3676 7.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatRight24.category = 'Arrows';

export default ArrowFatRight24;
