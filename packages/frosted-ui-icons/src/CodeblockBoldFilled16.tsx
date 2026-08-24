import * as React from 'react';
import { IconProps } from './types';

export const CodeblockBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CodeblockBoldFilled16"
      {...props}
    >
      <path
        d="M10.5 1C12.985 1 15 3.015 15 5.5v5c0 2.485-2.015 4.5-4.5 4.5h-5C3.015 15 1 12.985 1 10.5v-5C1 3.015 3.015 1 5.5 1h5zM7.207 5.543c-.39-.39-1.024-.39-1.414 0L4.185 7.151c-.47.469-.47 1.229 0 1.698l1.608 1.608c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L6.164 8l1.043-1.043c.39-.39.39-1.024 0-1.414zm3 0c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414L9.836 8 8.793 9.043c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0l1.608-1.608c.47-.469.47-1.229 0-1.698l-1.608-1.608z"
        fill={color}
      />
    </svg>
  );
};

CodeblockBoldFilled16.category = 'Code';

export default CodeblockBoldFilled16;
