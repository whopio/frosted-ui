import * as React from 'react';
import { IconProps } from './types';

export const TriangleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TriangleBoldFilled32"
      {...props}
    >
      <path
        d="M12.357 4.37c1.581-2.992 5.87-2.983 7.438.016l10.694 20.467C31.951 27.65 29.922 31 26.767 31H5.26c-3.164 0-5.192-3.366-3.714-6.163L12.357 4.37z"
        fill={color}
      />
    </svg>
  );
};

TriangleBoldFilled32.category = 'Interface General';

export default TriangleBoldFilled32;
