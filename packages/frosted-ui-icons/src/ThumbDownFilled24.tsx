import * as React from 'react';
import { IconProps } from './types';

export const ThumbDownFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThumbDownFilled24"
      {...props}
    >
      <path
        d="M6.421 14H3.75C2.784 14 2 13.216 2 12.25v-7.5C2 3.783 2.784 3 3.75 3h13.672c1.853 0 3.428 1.354 3.707 3.186l.837 5.5C22.312 13.956 20.555 16 18.26 16h-4.367l.145.926.296 1.9c.26 1.67-1.037 3.174-2.722 3.174-.654 0-1.256-.365-1.557-.949L6.421 14zM6 4.5v8H3.75c-.138 0-.25-.112-.25-.25v-7.5c0-.138.112-.25.25-.25H6z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ThumbDownFilled24.category = 'Interface General';

export default ThumbDownFilled24;
