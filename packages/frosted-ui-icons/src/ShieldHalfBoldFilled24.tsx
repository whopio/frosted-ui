import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldHalfBoldFilled24"
      {...props}
    >
      <path
        d="M10.957.186c.673-.248 1.413-.248 2.086 0l7.992 2.955C22.215 3.577 23 4.702 23 5.96v7.196c0 3.246-2.488 5.824-4.81 7.553-2.383 1.774-4.924 2.903-5.623 3.198-.366.155-.768.155-1.134 0-.7-.295-3.24-1.424-5.622-3.198C3.488 18.98 1 16.403 1 13.157V5.961c0-1.259.784-2.384 1.965-2.82L10.957.186zM12 21.974c.852-.374 2.998-1.38 4.995-2.869C19.248 17.427 21 15.374 21 13.157V5.961c0-.422-.263-.798-.658-.944L12.35 2.062C12.237 2.021 12.118 2 12 2v19.974z"
        fill={color}
      />
    </svg>
  );
};

ShieldHalfBoldFilled24.category = 'Security';

export default ShieldHalfBoldFilled24;
