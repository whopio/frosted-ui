import * as React from 'react';
import { IconProps } from './types';

export const CursorBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CursorBoldFilled20"
      {...props}
    >
      <path
        d="M19 16.586C19 17.919 17.92 19 16.586 19c-.64 0-1.254-.255-1.707-.707l-3.43-3.43-1.886 3.144C8.648 19.53 6.37 19.3 5.78 17.622L1.196 4.574C.46 2.477 2.477.46 4.574 1.196L17.622 5.78c1.678.59 1.91 2.867.385 3.782l-3.145 1.886 3.431 3.43c.453.454.707 1.068.707 1.708z"
        fill={color}
      />
    </svg>
  );
};

CursorBoldFilled20.category = 'Arrows';

export default CursorBoldFilled20;
