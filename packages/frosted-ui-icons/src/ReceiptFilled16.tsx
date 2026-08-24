import * as React from 'react';
import { IconProps } from './types';

export const ReceiptFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceiptFilled16"
      {...props}
    >
      <path
        d="M12.002 0c1.38 0 2.5 1.12 2.5 2.5v11.716c0 .924-.968 1.529-1.799 1.123l-2.014-.986-2.076.966c-.388.18-.836.18-1.224 0l-2.069-.966-2.022.988c-.83.405-1.798-.2-1.798-1.123V2.5C1.5 1.12 2.62 0 4 0h8.002zM5.126 7c-.414 0-.75.336-.75.75s.336.75.75.75h2.876c.414 0 .75-.336.75-.75S8.416 7 8.002 7H5.126zm0-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h5.751c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H5.126z"
        fill={color}
      />
    </svg>
  );
};

ReceiptFilled16.category = 'Money & Shopping';

export default ReceiptFilled16;
