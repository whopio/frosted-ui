import * as React from 'react';
import { IconProps } from './types';

export const CopyBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CopyBoldFilled32"
      {...props}
    >
      <path
        d="M26.356 9C28.921 9 31 11.08 31 13.644v12.712C31 28.921 28.92 31 26.356 31H13.644C11.079 31 9 28.92 9 26.356V13.644C9 11.079 11.08 9 13.644 9h12.712zm-8-8C20.921 1 23 3.08 23 5.644V6.65c0 .193-.157.35-.35.35h-9.006C9.974 7 7 9.975 7 13.644v9.006c0 .193-.157.35-.35.35H5.644C3.079 23 1 20.92 1 18.356V5.644C1 3.079 3.08 1 5.644 1h12.712z"
        fill={color}
      />
    </svg>
  );
};

CopyBoldFilled32.category = 'Interface General';

export default CopyBoldFilled32;
