import * as React from 'react';
import { IconProps } from './types';

export const Lightning24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Lightning24"
      {...props}
    >
      <path
        d="M16.355 0c.948 0 1.573.989 1.165 1.845L14.35 8.5h4.986c1.098 0 1.694 1.284.985 2.122L9.414 23.53c-.85 1.007-2.487.24-2.256-1.058L8.668 14H4.489c-.874 0-1.495-.852-1.227-1.685L6.85 1.145C7.069.464 7.704 0 8.42 0h7.935zM8.421 1.5c-.065 0-.123.042-.143.104L4.778 12.5H9.24c.635 0 1.117.574 1.005 1.2l-1.474 8.264L18.884 10H13.59c-.75 0-1.243-.781-.921-1.458L16.023 1.5H8.42z"
        fill={color}
      />
    </svg>
  );
};

Lightning24.category = 'Nature & Weather';

export default Lightning24;
