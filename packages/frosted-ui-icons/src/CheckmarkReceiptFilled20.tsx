import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkReceiptFilled20"
      {...props}
    >
      <path
        d="M15.001 0c1.657 0 3 1.343 3 3v15.633c0 .981-1.046 1.61-1.912 1.147l-2.679-1.43-2.723 1.462c-.43.23-.945.231-1.374 0l-2.715-1.461-2.687 1.43C3.045 20.242 2 19.615 2 18.634V3c0-1.657 1.343-3 3-3h10.001zm-1.22 6.22c-.294-.293-.768-.293-1.061 0l-3.97 3.97-1.47-1.47c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l2 2c.293.293.767.293 1.06 0l4.5-4.5c.293-.293.293-.767 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkReceiptFilled20.category = 'Money & Shopping';

export default CheckmarkReceiptFilled20;
