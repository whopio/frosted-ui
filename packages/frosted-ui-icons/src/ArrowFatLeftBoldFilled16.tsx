import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatLeftBoldFilled16"
      {...props}
    >
      <path
        d="M9 12v1.202c0 1.18-1.413 1.786-2.268.972L1.53 9.22c-.696-.664-.696-1.776 0-2.44l5.202-4.954C7.587 1.013 9 1.618 9 2.798V4h4.146C14.17 4 15 4.83 15 5.855v4.29C15 11.17 14.17 12 13.146 12H9z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatLeftBoldFilled16.category = 'Arrows';

export default ArrowFatLeftBoldFilled16;
