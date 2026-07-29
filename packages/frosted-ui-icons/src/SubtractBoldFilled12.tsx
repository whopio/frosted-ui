import * as React from 'react';
import { IconProps } from './types';

export const SubtractBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractBoldFilled12"
      {...props}
    >
      <path
        d="M10.75 4.75C11.4404 4.75 12 5.30964 12 6C12 6.69036 11.4404 7.25 10.75 7.25H1.25C0.559644 7.25 0 6.69036 0 6C0 5.30964 0.559644 4.75 1.25 4.75H10.75Z"
        fill={color}
      />
    </svg>
  );
};

SubtractBoldFilled12.category = 'Interface General';

export default SubtractBoldFilled12;
