import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceiptFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkReceiptFilled16"
      {...props}
    >
      <path
        d="M12.002 0c1.38 0 2.5 1.12 2.5 2.5v11.716c0 .924-.968 1.529-1.799 1.123l-2.014-.986-2.076.966c-.388.18-.836.18-1.224 0l-2.069-.966-2.022.988c-.83.405-1.798-.2-1.798-1.123V2.5C1.5 1.12 2.62 0 4 0h8.002zM10.78 5.22c-.293-.293-.767-.293-1.06 0L7.125 7.814 6.28 6.97c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l1.375 1.375c.293.293.767.293 1.06 0L10.78 6.28c.293-.293.293-.767 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkReceiptFilled16.category = 'Money & Shopping';

export default CheckmarkReceiptFilled16;
