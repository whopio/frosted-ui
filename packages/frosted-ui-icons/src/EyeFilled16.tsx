import * as React from 'react';
import { IconProps } from './types';

export const EyeFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="EyeFilled16"
      {...props}
    >
      <path
        d="M8 2c2.575 0 4.51 1.33 5.796 2.656 1.285 1.324 1.988 2.707 2.12 2.978.113.233.113.499 0 .732-.133.272-.835 1.654-2.12 2.978-1.286 1.325-3.22 2.657-5.796 2.657s-4.51-1.332-5.796-2.657C.919 10.02.217 8.64.084 8.366c-.112-.233-.112-.499 0-.732l.207-.393c.313-.566.949-1.592 1.913-2.585C3.49 3.33 5.424 2 8 2zm0 3C6.345 5 5 6.344 5 8c.001 1.657 1.344 3 3 3 1.657 0 3-1.343 3-3 0-1.656-1.342-3-3-3zm0 1.5c.83 0 1.5.672 1.5 1.5 0 .829-.671 1.5-1.5 1.5-.827 0-1.499-.671-1.5-1.5 0-.828.672-1.5 1.5-1.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

EyeFilled16.category = 'Accessibility';

export default EyeFilled16;
