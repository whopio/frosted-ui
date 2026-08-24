import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUpFilled20"
      {...props}
    >
      <path
        d="M14.5 11h2.528c1.045 0 1.598-1.236.901-2.015l-6.686-7.471c-.663-.74-1.823-.74-2.486 0L2.072 8.985c-.697.779-.145 2.015.9 2.015H5.5v6.102C5.5 18.15 6.35 19 7.398 19h5.205c1.048 0 1.897-.85 1.897-1.898V11z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatUpFilled20.category = 'Arrows';

export default ArrowFatUpFilled20;
