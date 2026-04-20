import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.6324 7.25L20.8159 7.25C21.6079 7.25 22.25 7.89208 22.25 8.68412V15.3159C22.25 16.1079 21.6079 16.75 20.8159 16.75H12.6324C12.4212 16.75 12.25 16.9212 12.25 17.1324V20.7072C12.25 21.2046 11.6602 21.4663 11.2914 21.1325L2.13999 12.8506C1.63671 12.3952 1.63671 11.6048 2.13999 11.1493L11.2914 2.86748C11.6602 2.53373 12.25 2.79542 12.25 3.29281V6.86757C12.25 7.07878 12.4212 7.25 12.6324 7.25Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeftFilled24.category = 'Arrows';

export default ArrowFatLeftFilled24;
