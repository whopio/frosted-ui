import * as React from 'react';
import { IconProps } from './types';

export const SplitLeftBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SplitLeftBoldFilled32"
      {...props}
    >
      <path
        d="M7.436 31.172c-.647.517-1.592.412-2.109-.235l-3.999-5c-.43-.538-.438-1.299-.021-1.846l3.999-5.25c.502-.659 1.442-.786 2.101-.284.66.502.787 1.443.285 2.102L5.528 23.5h4.135c1.298 0 2.49-.718 3.096-1.866l2.971-5.63c-1.048-1.957-2.144-4.03-2.975-5.615-.61-1.161-1.81-1.889-3.115-1.889H5.528l2.164 2.841c.502.66.374 1.6-.285 2.103-.659.501-1.6.374-2.101-.285l-4-5.25C.89 7.362.9 6.601 1.33 6.064l3.998-5C5.844.417 6.79.31 7.436.828c.647.518.751 1.462.234 2.109L5.62 5.5h4.02c2.427 0 4.648 1.351 5.772 3.496.817 1.56 1.888 3.585 2.916 5.504h4.678v.001c.619-1.748 2.284-3 4.243-3 2.485 0 4.5 2.014 4.5 4.5 0 2.484-2.015 4.5-4.5 4.5-1.959 0-3.624-1.253-4.242-3h-4.674l-2.92 5.533c-1.126 2.132-3.34 3.466-5.75 3.466H5.62l2.05 2.564c.517.647.412 1.59-.234 2.108z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

SplitLeftBoldFilled32.category = 'Arrows';

export default SplitLeftBoldFilled32;
