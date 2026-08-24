import * as React from 'react';
import { IconProps } from './types';

export const ExpandBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExpandBold20"
      {...props}
    >
      <path
        d="M7.293 11.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L4.414 17H8c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1v-6c0-.552.448-1 1-1s1 .448 1 1v3.586l4.293-4.293zM18 1c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1s-1-.448-1-1V4.414l-4.293 4.293c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L15.586 3H12c-.552 0-1-.448-1-1s.448-1 1-1h6z"
        fill={color}
      />
    </svg>
  );
};

ExpandBold20.category = 'Arrows';

export default ExpandBold20;
