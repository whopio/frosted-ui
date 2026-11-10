import * as React from 'react';
import { IconProps } from './types';

export const CubeBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CubeBoldFilled12"
      {...props}
    >
      <path
        d="M4.999.577c.619-.357 1.381-.357 2 0l3.196 1.846c.619.357 1 1.017 1 1.732v3.69c0 .714-.38 1.375-1 1.732L7 11.423c-.619.357-1.381.357-2 0L1.803 9.577c-.619-.357-1-1.018-1-1.732v-3.69c0-.715.381-1.375 1-1.732L4.999.577zm4.056 3.677c-.274-.48-.885-.646-1.365-.372L6 4.848l-1.691-.966c-.48-.274-1.09-.107-1.365.372-.273.48-.107 1.09.372 1.364L5 6.58V8.5c0 .552.448 1 1 1s1-.448 1-1V6.58l1.684-.962c.48-.274.646-.884.372-1.364z"
        fill={color}
      />
    </svg>
  );
};

CubeBoldFilled12.category = 'Objects';

export default CubeBoldFilled12;
