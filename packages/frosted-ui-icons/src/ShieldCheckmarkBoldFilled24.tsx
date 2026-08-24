import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmarkBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldCheckmarkBoldFilled24"
      {...props}
    >
      <path
        d="M10.957.186c.673-.248 1.413-.248 2.086 0l7.992 2.955C22.215 3.577 23 4.702 23 5.96v7.196c0 3.246-2.488 5.824-4.81 7.553-2.383 1.774-4.924 2.903-5.623 3.198-.366.155-.768.155-1.134 0-.7-.296-3.24-1.424-5.622-3.198C3.489 18.98 1 16.403 1 13.157V5.961c0-1.259.784-2.384 1.965-2.82L10.957.186zm5.355 8.426c-.39-.39-1.023-.39-1.414 0l-4.311 4.312-1.3-1.301c-.391-.39-1.024-.39-1.415 0-.39.39-.39 1.025 0 1.415l2.008 2.007c.39.39 1.023.39 1.414 0l5.018-5.019c.39-.39.39-1.023 0-1.414z"
        fill={color}
      />
    </svg>
  );
};

ShieldCheckmarkBoldFilled24.category = 'Security';

export default ShieldCheckmarkBoldFilled24;
