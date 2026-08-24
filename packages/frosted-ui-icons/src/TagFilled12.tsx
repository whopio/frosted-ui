import * as React from 'react';
import { IconProps } from './types';

export const TagFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TagFilled12"
      {...props}
    >
      <path
        d="M9.746 0c1.242 0 2.25 1.008 2.25 2.25v3c0 .795-.317 1.559-.88 2.121l-3.824 3.823c-1.074 1.074-2.815 1.074-3.889 0L.805 8.596c-1.073-1.074-1.074-2.815 0-3.888l3.83-3.83C5.197.317 5.96 0 6.755 0h2.99zM7.5 3C6.672 3 6 3.673 6 4.5 6 5.33 6.672 6 7.5 6 8.329 6 9 5.33 9 4.5 9 3.673 8.329 3 7.5 3z"
        fill={color}
      />
    </svg>
  );
};

TagFilled12.category = 'Interface General';

export default TagFilled12;
