import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkReceiptFilled24"
      {...props}
    >
      <path
        d="M18.251 0c2.071 0 3.75 1.679 3.75 3.75v18.852c0 1.018-1.084 1.67-1.983 1.192L16.36 21.85l-3.673 1.973c-.43.23-.945.23-1.373 0L7.646 21.85l-3.665 1.945C3.083 24.272 2 23.62 2 22.602V3.75C2 1.679 3.679 0 5.75 0h12.501zm-1.6 7.22c-.293-.293-.767-.293-1.06 0l-5.22 5.22-1.97-1.97c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l2.5 2.5c.293.293.768.293 1.06 0l5.75-5.75c.293-.293.293-.767 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkReceiptFilled24.category = 'Money & Shopping';

export default CheckmarkReceiptFilled24;
