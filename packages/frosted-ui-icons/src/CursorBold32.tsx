import * as React from 'react';
import { IconProps } from './types';

export const CursorBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.3637 28.978L2.22455 4.67169C1.64989 3.14334 3.14334 1.64989 4.67169 2.22456L28.978 11.3637C30.1951 11.8214 30.3417 13.484 29.2234 14.1475L22.7736 17.9748C22.2132 18.3073 22.1154 19.0784 22.5751 19.5402L29.3816 26.3787C29.7777 26.7766 30 27.3152 30 27.8766C30 29.0493 29.0493 30 27.8766 30C27.3152 30 26.7766 29.7777 26.3787 29.3816L19.5401 22.5752C19.0783 22.1155 18.3072 22.2132 17.9747 22.7736L14.1475 29.2234C13.484 30.3417 11.8214 30.1951 11.3637 28.978Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

CursorBold32.category = 'Arrows';

export default CursorBold32;
