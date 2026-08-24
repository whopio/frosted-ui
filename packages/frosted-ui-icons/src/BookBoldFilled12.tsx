import * as React from 'react';
import { IconProps } from './types';

export const BookBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BookBoldFilled12"
      {...props}
    >
      <path
        d="M.488 1.748C1.994.85 3.573.805 4.858 1.376c.088.039.142.127.142.222v9.124c0 .225-.288.349-.475.224-.8-.536-1.939-.745-3.056-.151-.31.164-.684.154-.985-.027-.3-.18-.484-.506-.484-.857V2.607c0-.352.185-.679.488-.86zM7 1.598c0-.095.054-.183.142-.222 1.285-.57 2.864-.525 4.37.372.303.18.488.507.488.86V9.91c0 .35-.184.677-.484.857-.301.181-.675.191-.985.027-1.117-.594-2.256-.385-3.056.15-.187.126-.475.002-.475-.223V1.598z"
        fill={color}
      />
    </svg>
  );
};

BookBoldFilled12.category = 'Communication';

export default BookBoldFilled12;
