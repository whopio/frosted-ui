import * as React from 'react';
import { IconProps } from './types';

export const FountainPenBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FountainPenBoldFilled20"
      {...props}
    >
      <path
        d="M15.486 11.775l-1.575 3.94c-.393.982-1.276 1.683-2.322 1.841l-9.116 1.381L7.94 13.47c.101.018.204.03.31.03.966 0 1.75-.784 1.75-1.75 0-.967-.784-1.75-1.75-1.75s-1.75.783-1.75 1.75c0 .104.01.206.027.305L1.06 17.522l1.38-9.115c.159-1.046.86-1.93 1.841-2.322L8.22 4.508l7.266 7.267zM10.54 1.83c.655-.918 1.956-1.105 2.843-.41l.183.163 4.85 4.85c.938.94.71 2.518-.456 3.154l-1.186.646-7.011-7.01.647-1.186.13-.207z"
        fill={color}
      />
    </svg>
  );
};

FountainPenBoldFilled20.category = 'Interface General';

export default FountainPenBoldFilled20;
