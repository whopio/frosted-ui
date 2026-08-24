import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatRightBoldFilled16"
      {...props}
    >
      <path
        d="M7 12v1.202c0 1.18 1.413 1.786 2.268.972L14.47 9.22c.696-.664.696-1.776 0-2.44L9.268 1.826C8.413 1.013 7 1.618 7 2.798V4H2.854C1.83 4 1 4.83 1 5.855v4.29C1 11.17 1.83 12 2.854 12H7z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatRightBoldFilled16.category = 'Arrows';

export default ArrowFatRightBoldFilled16;
