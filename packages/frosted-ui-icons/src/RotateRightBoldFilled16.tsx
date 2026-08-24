import * as React from 'react';
import { IconProps } from './types';

export const RotateRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateRightBoldFilled16"
      {...props}
    >
      <path
        d="M8 .5c1.72 0 3.303.58 4.567 1.552C12.757 1.442 13.327 1 14 1c.828 0 1.5.672 1.5 1.5v3c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5 0-.59.341-1.099.836-1.344C9.654 3.741 8.856 3.5 8 3.5c-1.814 0-3.38 1.073-4.093 2.626C3.647 6.695 3.5 7.328 3.5 8c0 .672.146 1.305.407 1.874C4.62 11.427 6.187 12.5 8 12.5c1.814 0 3.38-1.073 4.093-2.626.345-.753 1.236-1.083 1.989-.737.753.345 1.083 1.236.737 1.989C13.636 13.704 11.03 15.5 8 15.5c-3.03 0-5.636-1.796-6.82-4.374C.744 10.173.5 9.113.5 8s.243-2.173.68-3.126C2.365 2.296 4.97.5 8 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateRightBoldFilled16.category = 'Arrows';

export default RotateRightBoldFilled16;
