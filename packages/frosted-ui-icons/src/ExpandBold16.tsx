import * as React from 'react';
import { IconProps } from './types';

export const ExpandBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExpandBold16"
      {...props}
    >
      <path
        d="M5.793 8.793c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L4.414 13H6.5c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1V9.5c0-.552.448-1 1-1s1 .448 1 1v2.086l2.793-2.793zM14 1c.552 0 1 .448 1 1v4.5c0 .552-.448 1-1 1s-1-.448-1-1V4.414l-2.793 2.793c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L11.586 3H9.5c-.552 0-1-.448-1-1s.448-1 1-1H14z"
        fill={color}
      />
    </svg>
  );
};

ExpandBold16.category = 'Arrows';

export default ExpandBold16;
