import * as React from 'react';
import { IconProps } from './types';

export const CopyBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.4004 7C21.3883 7.00021 22.9998 8.61169 23 10.5996V19.4004C22.9998 21.3883 21.3883 22.9998 19.4004 23H10.5996C8.61169 22.9998 7.00021 21.3883 7 19.4004V10.5996C7.00021 8.61169 8.61169 7.00021 10.5996 7H19.4004ZM13.4004 1C15.3883 1.00021 16.9998 2.61169 17 4.59961C17 4.82074 16.8207 5 16.5996 5H10.5996C7.50712 5.00021 5.00021 7.50712 5 10.5996V16.5996C5 16.8207 4.82074 17 4.59961 17C2.61169 16.9998 1.00021 15.3883 1 13.4004V4.59961C1.00021 2.61169 2.61169 1.00021 4.59961 1H13.4004Z"
        fill={color}
      />
    </svg>
  );
};

CopyBoldFilled24.category = 'Interface General';

export default CopyBoldFilled24;
