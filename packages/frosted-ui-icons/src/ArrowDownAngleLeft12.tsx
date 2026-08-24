import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownAngleLeft12"
      {...props}
    >
      <path
        d="M11.25 1.5c.414 0 .75.336.75.75v4.063C12 7.244 11.245 8 10.312 8H2.53l1.196 1.227c.289.296.282.771-.014 1.06-.297.29-.772.283-1.06-.014l-2.438-2.5c-.284-.29-.284-.755 0-1.046l2.437-2.5c.29-.297.764-.303 1.06-.014.297.289.304.764.015 1.06L2.529 6.5h7.784c.103 0 .187-.084.187-.188V2.25c0-.414.336-.75.75-.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleLeft12.category = 'Arrows';

export default ArrowDownAngleLeft12;
