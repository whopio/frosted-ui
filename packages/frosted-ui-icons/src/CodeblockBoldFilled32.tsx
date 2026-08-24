import * as React from 'react';
import { IconProps } from './types';

export const CodeblockBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CodeblockBoldFilled32"
      {...props}
    >
      <path
        d="M22.5 1C27.194 1 31 4.806 31 9.5v13c0 4.694-3.806 8.5-8.5 8.5h-13C4.806 31 1 27.194 1 22.5v-13C1 4.806 4.806 1 9.5 1h13zm-8.793 8.293c-.39-.39-1.024-.39-1.414 0l-5.47 5.47c-.683.683-.683 1.79 0 2.474l5.47 5.47c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L8.414 16l5.293-5.293c.39-.39.39-1.024 0-1.414zm6 0c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414L23.586 16l-5.293 5.293c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0l5.47-5.47c.683-.683.683-1.79 0-2.474l-5.47-5.47z"
        fill={color}
      />
    </svg>
  );
};

CodeblockBoldFilled32.category = 'Code';

export default CodeblockBoldFilled32;
