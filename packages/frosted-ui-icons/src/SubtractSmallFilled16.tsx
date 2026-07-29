import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallFilled16"
      {...props}
    >
      <path
        d="M11.75 6.75C12.4404 6.75 13 7.30964 13 8C13 8.69036 12.4404 9.25 11.75 9.25H4.25C3.55964 9.25 3 8.69036 3 8C3 7.30964 3.55964 6.75 4.25 6.75H11.75Z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallFilled16.category = 'Interface General';

export default SubtractSmallFilled16;
