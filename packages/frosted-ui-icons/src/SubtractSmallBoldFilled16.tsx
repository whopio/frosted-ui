import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallBoldFilled16"
      {...props}
    >
      <path
        d="M11.75 6.5C12.5784 6.5 13.25 7.17157 13.25 8C13.25 8.82843 12.5784 9.5 11.75 9.5H4.25C3.42157 9.5 2.75 8.82843 2.75 8C2.75 7.17157 3.42157 6.5 4.25 6.5H11.75Z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallBoldFilled16.category = 'Interface General';

export default SubtractSmallBoldFilled16;
