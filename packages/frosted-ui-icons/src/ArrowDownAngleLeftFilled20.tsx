import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleLeftFilled20"
      {...props}
    >
      <path
        d="M17.75 2.5c.69 0 1.25.56 1.25 1.25v6.938c0 1.553-1.26 2.812-2.813 2.812H5.412l1.693 1.588c.504.472.53 1.263.058 1.767-.472.503-1.263.529-1.766.057l-4-3.75C1.143 12.926 1 12.595 1 12.25c0-.345.143-.676.396-.912l4-3.75c.503-.472 1.294-.446 1.766.058.472.503.446 1.294-.058 1.766L5.411 11h10.777c.172 0 .312-.14.312-.313V3.75c0-.69.56-1.25 1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleLeftFilled20.category = 'Arrows';

export default ArrowDownAngleLeftFilled20;
