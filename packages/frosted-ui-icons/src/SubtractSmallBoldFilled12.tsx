import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallBoldFilled12"
      {...props}
    >
      <path
        d="M8.75 4.75C9.44036 4.75 10 5.30964 10 6C10 6.69036 9.44036 7.25 8.75 7.25H3.25C2.55964 7.25 2 6.69036 2 6C2 5.30964 2.55964 4.75 3.25 4.75H8.75Z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallBoldFilled12.category = 'Interface General';

export default SubtractSmallBoldFilled12;
