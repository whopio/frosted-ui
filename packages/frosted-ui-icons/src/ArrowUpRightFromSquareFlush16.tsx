import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareFlush16 = ({
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
        d="M6.16667 2.5H4.63333C3.8866 2.5 3.51323 2.5 3.22801 2.64533C2.97713 2.77315 2.77315 2.97713 2.64533 3.22801C2.5 3.51323 2.5 3.8866 2.5 4.63333V11.3667C2.5 12.1134 2.5 12.4868 2.64533 12.772C2.77315 13.0229 2.97713 13.2269 3.22801 13.3547C3.51323 13.5 3.8866 13.5 4.63333 13.5H11.3667C12.1134 13.5 12.4868 13.5 12.772 13.3547C13.0229 13.2269 13.2269 13.0229 13.3547 12.772C13.5 12.4868 13.5 12.1134 13.5 11.3667V9.83333M9.16667 2.5H13.5M13.5 2.5V6.83333M13.5 2.5L7.33333 8.66667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpRightFromSquareFlush16;
