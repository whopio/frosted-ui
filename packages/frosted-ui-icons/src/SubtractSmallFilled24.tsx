import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallFilled24"
      {...props}
    >
      <path
        d="M17.75 10.75C18.4404 10.75 19 11.3096 19 12C19 12.6904 18.4404 13.25 17.75 13.25H6.25C5.55964 13.25 5 12.6904 5 12C5 11.3096 5.55964 10.75 6.25 10.75H17.75Z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallFilled24.category = 'Interface General';

export default SubtractSmallFilled24;
