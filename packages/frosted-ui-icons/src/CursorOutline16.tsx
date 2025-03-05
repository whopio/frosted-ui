import * as React from 'react';
import { IconProps } from './types';

export const CursorOutline16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.8299 3.31926C1.50173 2.39378 2.3939 1.5016 3.31938 1.82978L13.8709 5.5713C14.877 5.92805 14.9153 7.33662 13.9302 7.74762L10.7319 9.08186L13.4084 11.7583C13.864 12.2139 13.864 12.9526 13.4084 13.4083C12.9528 13.8639 12.2141 13.8639 11.7585 13.4083L9.08199 10.7318L7.74775 13.9301C7.33675 14.9152 5.92817 14.8769 5.57143 13.8708L1.8299 3.31926Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CursorOutline16;
