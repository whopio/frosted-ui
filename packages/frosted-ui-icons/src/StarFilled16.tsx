import * as React from 'react';
import { IconProps } from './types';

export const StarFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StarFilled16"
      {...props}
    >
      <path
        d="M6.923 1.116c.515-.744 1.647-.744 2.162 0l.1.17L10.9 4.76l3.958.505c1.067.136 1.568 1.464.726 2.236l-2.878 2.64.722 3.764c.215 1.123-.985 1.87-1.908 1.386l-3.516-1.844-3.516 1.844c-.923.483-2.123-.262-1.908-1.386l.72-3.765L.425 7.5c-.842-.772-.341-2.1.727-2.236l3.956-.505 1.715-3.472.101-.171z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

StarFilled16.category = 'Interface General';

export default StarFilled16;
