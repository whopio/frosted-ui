import * as React from 'react';
import { IconProps } from './types';

export const ArrowUp12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.00024 0C6.20647 9.02596e-05 6.40356 0.0854142 6.54517 0.235352L10.7952 4.73535C11.0794 5.03644 11.0658 5.51055 10.7649 5.79492C10.4638 6.07928 9.98975 6.06563 9.70532 5.76465L6.75024 2.63574V11.25C6.75024 11.6641 6.41431 11.9998 6.00024 12C5.58603 12 5.25024 11.6642 5.25024 11.25V2.63574L2.29517 5.76465C2.01081 6.06573 1.53674 6.07916 1.2356 5.79492C0.934457 5.51051 0.920913 5.03649 1.20532 4.73535L5.45532 0.235352C5.59699 0.0854364 5.79397 9.01641e-09 6.00024 0Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowUp12;
