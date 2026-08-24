import * as React from 'react';
import { IconProps } from './types';

export const FountainPenFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FountainPenFilled12"
      {...props}
    >
      <path
        d="M9.688 7.3L8.58 10.074c-.197.494-.642.846-1.168.926l-6.306.956 3.718-3.72c.058.008.116.015.176.015.69 0 1.25-.56 1.25-1.25S5.69 5.75 5 5.75 3.75 6.31 3.75 7c0 .059.006.117.014.174l-3.72 3.72.957-6.306c.08-.526.432-.97.926-1.168l2.77-1.11 4.99 4.99zM6.162.782c.48-.878 1.67-1.05 2.377-.342l3.02 3.021c.708.708.537 1.897-.341 2.377l-.567.308-4.798-4.8.31-.564z"
        fill={color}
      />
    </svg>
  );
};

FountainPenFilled12.category = 'Interface General';

export default FountainPenFilled12;
