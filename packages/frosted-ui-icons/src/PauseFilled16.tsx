import * as React from 'react';
import { IconProps } from './types';

export const PauseFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PauseFilled16"
      {...props}
    >
      <path
        d="M4.667 1.5C5.403 1.5 6 2.097 6 2.833v10.333c0 .737-.597 1.334-1.333 1.334H3.333C2.597 14.5 2 13.903 2 13.166V2.833C2 2.097 2.597 1.5 3.333 1.5h1.334zm8 0c.736 0 1.333.597 1.333 1.333v10.333c0 .737-.597 1.334-1.333 1.334h-1.334c-.736 0-1.333-.597-1.333-1.334V2.833c0-.736.597-1.333 1.333-1.333h1.334z"
        fill={color}
      />
    </svg>
  );
};

PauseFilled16.category = 'Sound & Music';

export default PauseFilled16;
