import * as React from 'react';
import { IconProps } from './types';

export const FlagFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FlagFilled32"
      {...props}
    >
      <path
        d="M11.855 2.917c1.585 0 3.136.785 4.476 1.448 1.428.707 2.646 1.293 3.81 1.293 1.155 0 2.339-.266 3.301-.565 1.357-.423 2.973.526 2.973 2.09v12.1c0 .787-.45 1.542-1.23 1.855-1.04.416-3.028 1.093-5.043 1.093-1.585 0-3.136-.784-4.476-1.448-1.428-.707-2.645-1.292-3.81-1.292-1.262 0-2.558.317-3.558.648-.495.163-.909.327-1.196.449l-.02.008v7.738c0 .414-.336.75-.75.75s-.75-.336-.75-.75V5.866c0-.787.45-1.543 1.23-1.855 1.04-.417 3.028-1.094 5.043-1.094z"
        fill={color}
      />
    </svg>
  );
};

FlagFilled32.category = 'Objects';

export default FlagFilled32;
