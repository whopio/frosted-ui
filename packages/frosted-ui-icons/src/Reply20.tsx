import * as React from 'react';
import { IconProps } from './types';

export const Reply20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.5954 9.6896L8.67992 3.33169C8.94817 3.09094 9.37483 3.28133 9.37483 3.64179V7.083C16.4582 7.083 18.3332 9.79135 18.3332 16.8747C17.0832 14.3747 16.4582 12.9164 9.37483 12.9164V16.3575C9.37483 16.718 8.94817 16.9084 8.67992 16.6677L1.5954 10.3098C1.41091 10.1442 1.41091 9.8551 1.5954 9.6896Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Reply20;
