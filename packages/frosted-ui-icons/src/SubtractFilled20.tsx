import * as React from 'react';
import { IconProps } from './types';

export const SubtractFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractFilled20"
      {...props}
    >
      <path
        d="M17.75 8.75C18.4404 8.75 19 9.30964 19 10C19 10.6904 18.4404 11.25 17.75 11.25H2.25C1.55964 11.25 1 10.6904 1 10C1 9.30964 1.55964 8.75 2.25 8.75H17.75Z"
        fill={color}
      />
    </svg>
  );
};

SubtractFilled20.category = 'Interface General';

export default SubtractFilled20;
