import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatDownBold20"
      {...props}
    >
      <path
        d="M6 9.694V3.147C6 2.514 6.513 2 7.147 2h5.705C13.486 2 14 2.514 14 3.147v6.547c0 .169.137.306.306.306h2.672c.405 0 .611.485.332.777l-6.648 6.932c-.361.377-.963.377-1.325 0L2.69 10.777c-.28-.292-.073-.777.331-.777h2.673C5.863 10 6 9.863 6 9.694z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatDownBold20.category = 'Arrows';

export default ArrowFatDownBold20;
