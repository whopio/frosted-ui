import * as React from 'react';
import { IconProps } from './types';

export const SplitLeftBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SplitLeftBoldFilled12"
      {...props}
    >
      <path
        d="M3.15 11.76c-.419.359-1.05.31-1.41-.11L.24 9.9c-.32-.374-.32-.927.001-1.301l1.5-1.75c.36-.419.99-.467 1.41-.108.419.36.467.99.108 1.41l-.085.099h.452c.414 0 .785-.255.934-.642L5.179 6l-.62-1.608c-.148-.386-.52-.641-.933-.641h-.452l.085.1c.36.419.31 1.05-.109 1.409-.419.36-1.05.31-1.409-.109L.241 3.4c-.32-.374-.32-.926 0-1.3l1.5-1.75c.36-.42.99-.468 1.41-.109.419.36.467.99.108 1.41l-.085.099h.452c1.241 0 2.355.764 2.8 1.923L6.938 5h.8c.368-.74 1.13-1.25 2.013-1.25C10.993 3.75 12 4.757 12 6s-1.007 2.25-2.25 2.25c-.883 0-1.645-.51-2.014-1.25h-.8l-.51 1.327c-.445 1.159-1.559 1.923-2.8 1.923h-.451l.085.1c.359.419.31 1.05-.11 1.41z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

SplitLeftBoldFilled12.category = 'Arrows';

export default SplitLeftBoldFilled12;
