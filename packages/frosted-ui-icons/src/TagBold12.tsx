import * as React from 'react';
import { IconProps } from './types';

export const TagBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TagBold12"
      {...props}
    >
      <path
        d="M9.496 0c1.38 0 2.5 1.12 2.5 2.5V5.26c0 .862-.343 1.689-.953 2.298L7.48 11.123c-1.171 1.171-3.07 1.172-4.242 0L.878 8.763c-1.17-1.17-1.17-3.07 0-4.24l3.57-3.57C5.056.342 5.883 0 6.745 0h2.75zm-2.75 2c-.331 0-.65.132-.885.366l-3.569 3.57c-.39.39-.39 1.024 0 1.414l2.36 2.36c.39.39 1.023.39 1.413 0L9.63 6.144c.234-.234.366-.552.366-.884V2.5c0-.276-.224-.5-.5-.5h-2.75zm.755 1.255c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

TagBold12.category = 'Interface General';

export default TagBold12;
