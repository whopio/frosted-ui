import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatDownBoldFilled32"
      {...props}
    >
      <path
        d="M24 15h4.045c1.577 0 2.39 1.885 1.307 3.031l-11.467 12.13c-1.024 1.083-2.747 1.083-3.77 0L2.648 18.031C1.566 16.885 2.379 15 3.955 15H8V3.993C8 2.34 9.34 1 10.993 1h10.014C22.66 1 24 2.34 24 3.993V15z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatDownBoldFilled32.category = 'Arrows';

export default ArrowFatDownBoldFilled32;
