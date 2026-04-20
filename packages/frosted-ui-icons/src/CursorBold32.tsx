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
        d="M11.3638 28.978L2.22468 4.67169C1.65002 3.14334 3.14346 1.64989 4.67181 2.22456L28.9781 11.3637C30.1952 11.8214 30.3418 13.484 29.2236 14.1475L22.7737 17.9748C22.2133 18.3073 22.1155 19.0784 22.5752 19.5402L29.3817 26.3787C29.7778 26.7766 30.0001 27.3152 30.0001 27.8766C30.0001 29.0493 29.0495 30 27.8767 30C27.3153 30 26.7767 29.7777 26.3788 29.3816L19.5403 22.5752C19.0784 22.1155 18.3073 22.2132 17.9748 22.7736L14.1477 29.2234C13.4841 30.3417 11.8215 30.1951 11.3638 28.978Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

CursorBold32.category = 'Arrows';

export default CursorBold32;
