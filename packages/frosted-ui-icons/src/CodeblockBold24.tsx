import * as React from 'react';
import { IconProps } from './types';

export const CodeblockBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CodeblockBold24"
      {...props}
    >
      <path
        d="M16.25 1C19.978 1 23 4.022 23 7.75v8.5c0 3.728-3.022 6.75-6.75 6.75h-8.5C4.022 23 1 19.978 1 16.25v-8.5C1 4.022 4.022 1 7.75 1h8.5zm-8.5 2C5.127 3 3 5.127 3 7.75v8.5C3 18.873 5.127 21 7.75 21h8.5c2.623 0 4.75-2.127 4.75-4.75v-8.5C21 5.127 18.873 3 16.25 3h-8.5zm1.293 4.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L7.164 12l3.293 3.293c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0l-3.47-3.47c-.683-.683-.683-1.79 0-2.474l3.47-3.47zm4.5 0c.39-.39 1.024-.39 1.414 0l3.47 3.47c.683.683.683 1.79 0 2.474l-3.47 3.47c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L16.836 12l-3.293-3.293c-.39-.39-.39-1.024 0-1.414z"
        fill={color}
      />
    </svg>
  );
};

CodeblockBold24.category = 'Code';

export default CodeblockBold24;
